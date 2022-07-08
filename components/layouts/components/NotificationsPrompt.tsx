/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable security/detect-object-injection */
/* eslint-disable no-console */
import { toast } from 'react-toastify'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from 'firebase/messaging'
import { NOTIFICATIONS } from '../../../utils/constants'
import app from '../../../firebase/util'
import { isClient } from '../../../utils/helpers'

export const NotificationsPrompt = () => {
  const toggleModal = () => {
    const body = document.querySelector('body')
    const modals = document.querySelectorAll('#notification-modal')
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.toggle('opacity-0')
      modals[i].classList.toggle('pointer-events-none')
    }
    body?.classList.toggle('modal-active')
  }

  const isTokenSentToServer = () => {
    return localStorage.getItem(NOTIFICATIONS) === '1'
  }

  const setTokenSentToServer = (sent: boolean) => {
    localStorage.setItem(NOTIFICATIONS, sent ? '1' : '0')
  }
  const setTokenToTopic = (token: string) => {
    axios.get(`/api/notification?token=${token}`)
  }

  const sendTokenToServer = useCallback((currentToken: string) => {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...')
      setTokenToTopic(currentToken)
      setTokenSentToServer(true)
    } else {
      console.log("Token already sent to server so won't send it again ")
    }
  }, [])
  const promptNotifications = () => {
    const messaging = getMessaging(app)
    if (!('Notification' in window)) {
      toggleModal()
      setTokenSentToServer(true)
    } else {
      Notification.requestPermission().then((permission) => {
        console.log('Notification permission granted.')
        toggleModal()
        // Get Token
        if (permission === 'granted') {
          toast.success('You will receive regular updates from droidconKe')
          getToken(messaging, { vapidKey: process.env.FIREBASE_PUBLIC_KEY })
            .then((token) => {
              console.log(token)
              sendTokenToServer(token)
            })
            .catch((err) => {
              console.log('An error occurred while retrieving token. ', err)
            })
        } else if (permission === 'denied') {
          toast.error("Notifications from droidconKe won't be sent to you")
          console.log('Unable to get permission to notify.')
        }
      })
    }
  }

  const rejectPrompt = () => {
    toggleModal()
    setTokenSentToServer(true)
    toast.error("Notifications from droidconKe won't be sent to you")
  }

  const [isMessageSupported, setIsSupported] = useState(false)
  useEffect(() => {
    const isMessage = async () => {
      setIsSupported(await isSupported())
    }
    isMessage()
    if (isMessageSupported && isClient) {
      console.log('Messaging Supported')
      const messaging = getMessaging(app)

      if (Notification.permission === 'granted') {
        console.log('allowed')
        getToken(messaging, { vapidKey: process.env.FIREBASE_PUBLIC_KEY })
          .then((token) => {
            console.log(token)
            sendTokenToServer(token)
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err)
          })
      } else if (
        // Notification.permission === 'blocked' ||
        Notification.permission === 'denied'
      ) {
        /* the user has previously denied push. Can't reprompt. */
        console.log('denied')
      } else if (
        Notification.permission === 'default' &&
        !isTokenSentToServer()
      ) {
        console.log('default')
        toggleModal()
      }
      // Callback fired if Instance ID token is updated.
      // messaging.onTokenRefresh( () {
      //   getToken(messaging, { vapidKey: process.env.FIREBASE_PUBLIC_KEY })
      //     .then( (refreshedToken) => {
      //       console.log('Token refreshed.')
      //       // to the app server.
      //       setTokenSentToServer(false)
      //       // Send Instance ID token to app server.
      //       sendTokenToServer(refreshedToken)
      //     })
      //     .catch( (err) => {
      //       console.log('Unable to retrieve refreshed token ', err)
      //       setTokenSentToServer(false)
      //     })
      // })

      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
      })
    } else {
      console.log('Not Supported')
    }
  }, [isMessageSupported, sendTokenToServer])

  return (
    <div>
      <div
        id="notification-modal"
        className="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-start justify-start z-40"
      >
        <div className="modal-overlay-1 absolute w-full h-full modal-bg z-30 overflow-hidden" />

        <section className="w-full md:px-56 px-4 mt-10 z-40 flex flex-col items-start container mx-auto">
          <div className="bg-black dark:bg-black-dark p-4 md:p-8 justify-center items-center rounded-xl">
            <p className="text-accent dark:text-accent text-sm">
              DroidconKe want to show notifications!
            </p>
            <div className="flex flex-wrap w-full justify-between items-center mt-6">
              <button
                type="button"
                className="btn-secondary px-6"
                onClick={() => promptNotifications()}
              >
                Allow
              </button>
              <button
                type="button"
                className="btn-accent px-6"
                onClick={() => rejectPrompt()}
              >
                Block
              </button>
            </div>
          </div>
          <div className="ml-2 flex lg:ml-32 items-end">
            <div>
              <img
                className="w-56 md:w-64"
                src="/images/notif.svg"
                alt="notif"
              />
            </div>
            <div className="flex mt-20 md:-ml-10 w-40">
              <span className="text-sm text-white">
                Allow Notifications to get regular updates
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
