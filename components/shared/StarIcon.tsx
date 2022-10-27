/* eslint-disable no-console */
import { getMessaging, getToken } from 'firebase/messaging'
import { useState } from 'react'
import { toast } from 'react-toastify'
import app from '../../firebase/util'
import { Session } from '../../types/types'
import axios from '../../utils/axios'
import { SaveSession } from '../sessions/SaveSession'

/* eslint-disable react/require-default-props */
interface StarIconProps {
  isStar?: boolean
  session: Session
}

export const StarIcon = ({ isStar = true, session }: StarIconProps) => {
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
          toast.error('Login to give feedback')
        }
      })
  }

  const color = isStared ? '#FF6E4D' : 'none'
  const stroke = isStared ? '#FF6E4D' : '#000ceb'
  const fill = isStared ? '#FF6E4D' : '#000ceb'

  return isStar ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.895"
      height="27"
      className="cursor-pointer"
      onClick={() => bookmark()}
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path data-name="Rectangle 593" fill="none" d="M.474 0h27v27h-27z" />
          <path
            data-name="Path 114"
            d="M26.603 10.459a.634.634 0 0 0-.537-.435l-7.971-1.16-3.572-7.236a.639.639 0 0 0-1.149 0L9.801 8.864l-7.987 1.16a.639.639 0 0 0-.35 1.074l5.77 5.656-.032.188-1.311 7.767a.628.628 0 0 0 .258.628.618.618 0 0 0 .677.048l7.144-3.76 7.144 3.763a.639.639 0 0 0 .892-.677l-1.342-7.957 5.774-5.635a.628.628 0 0 0 .165-.66Z"
            fill={color}
          />
          <path
            data-name="Path 115"
            d="M27.307 10.234a1.37 1.37 0 0 0-1.117-.945l-7.6-1.1-3.4-6.892a1.386 1.386 0 0 0-2.482 0l-3.4 6.892-7.6 1.1a1.38 1.38 0 0 0-1.117.945 1.364 1.364 0 0 0 .349 1.418l5.49 5.361-1.291 7.568a1.386 1.386 0 0 0 2.009 1.461l6.8-3.545 6.795 3.545a1.418 1.418 0 0 0 .65.161 1.364 1.364 0 0 0 .811-.263 1.391 1.391 0 0 0 .537-1.359l-1.273-7.568 5.5-5.371a1.364 1.364 0 0 0 .339-1.408Zm-6.644 6.521 1.343 7.955a.639.639 0 0 1-.929.677l-7.145-3.759-7.144 3.76a.618.618 0 0 1-.677-.048.628.628 0 0 1-.22-.628l1.329-7.769.032-.188-5.8-5.635a.639.639 0 0 1 .355-1.074l7.987-1.16 3.579-7.258a.639.639 0 0 1 1.147 0l3.572 7.235 7.987 1.16a.639.639 0 0 1 .355 1.074Z"
            fill={fill}
            stroke={stroke}
          />
        </g>
      </g>
    </svg>
  ) : (
    <SaveSession bookmark={bookmark} isStared={isStared} />
  )
}
