/* eslint-disable no-console */
import { getMessaging, getToken } from 'firebase/messaging'
import { useState } from 'react'
import { toast } from 'react-toastify'
import app from '../firebase/util'
import { Session } from '../types/types'
import axios from '../utils/axios'

export const useStarSession = ({ session }: { session: Session }) => {
  const [isStared, setIsStared] = useState(session.is_bookmarked)

  const setTokenToTopic = (token: string, topic: string) => {
    const headers = {
      Authorization: `key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      'Content-Type': 'application/json',
    }

    axios
      .post(
        `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`,
        null,
        { headers }
      )
      .then(() => {
        console.log(`Subscribed to "${topic}"`)
      })
      .catch((err) => {
        console.log('Unable to subscribe ', err)
      })
  }

  const removeTokenToTopic = (token: string, topic: string) => {
    const headers = {
      Authorization: `key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      'Content-Type': 'application/json',
    }

    axios
      .post(
        'https://iid.googleapis.com/iid/v1:batchRemove',
        {
          to: `/topics/${topic}`,
          registration_tokens: [token],
        },
        { headers }
      )
      .then(() => {
        console.log(`Subscribed to "${topic}"`)
      })
      .catch((err) => {
        console.log('Unable to subscribe ', err)
      })
  }

  const notification = (topic: string, type: 'unsubscribed' | 'subscribed') => {
    const messaging = getMessaging(app)

    getToken(messaging, { vapidKey: process.env.FIREBASE_PUBLIC_KEY })
      .then((token) => {
        // eslint-disable-next-line no-unused-expressions
        type === 'subscribed'
          ? setTokenToTopic(token, topic)
          : removeTokenToTopic(token, topic)
      })

      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
  }

  const bookmark = () => {
    axios
      .post(
        `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/bookmark_schedule/${session.id}`
      )
      .then(() => {
        // eslint-disable-next-line no-unused-expressions
        isStared
          ? notification(session.slug!, 'unsubscribed')
          : notification(session.slug!, 'subscribed')

        setIsStared(!isStared)
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error('Login to give save session')
        }
      })
  }

  return {
    bookmark,
    isStared,
  }
}
