import { useState } from 'react'
import Rating from 'react-rating'
import { toast } from 'react-toastify'
import { FeedbackError } from '../../types/types'
import axios from '../../utils/axios'
import { Modal } from '../shared/Modal'

export const SessionFeedback = ({
  closeDialog,
  sessionSlug,
}: {
  closeDialog: () => void
  // eslint-disable-next-line react/require-default-props
  sessionSlug?: string
}) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [errors, setErrors] = useState<FeedbackError | null>(null)

  const sendFeedback = async () => {
    setLoading(true)
    setErrors(null)
    const eventSlug = process.env.NEXT_PUBLIC_EVENT_SLUG
    await axios
      .post(
        sessionSlug
          ? `/events/${eventSlug}/feedback/sessions/${sessionSlug}`
          : `/events/${eventSlug}/feedback`,
        { feedback: message, rating }
      )
      .then((response) => {
        toast.success(response.data.message)
        setLoading(false)
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
        if (error.response.status === 401) {
          toast.error('Login to give feedback')
        }
        setLoading(false)
      })
  }

  return (
    <Modal
      sideImage="/images/svg/feedback-1.svg"
      widthClass="md:w-5/12"
      closeDialog={() => closeDialog()}
    >
      <>
        <div className="w-full px-4 lg:px-8 pt-6">
          <p className="text-2xl font-black lowercase mt-4">
            {sessionSlug ? 'session' : 'event'} Feedback
          </p>
          <p className="text-sm black mt-4">
            Kindly leave your honest feedback to help us make it even better.
            Cheers : )
          </p>
          <textarea
            id="feed-message"
            rows={4}
            className={`appearance-none block w-full bg-lighter text-gray-700 rounded py-1 px-1 leading-tight mt-4 text-sm ${
              errors?.feedback ? 'border border-red-500' : ''
            }`}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors?.feedback && (
            <p className="text-red-500 text-xs italic">
              {errors?.feedback[0]}.
            </p>
          )}
          <div className="items-center mt-4 w-full">
            <div>
              <p className="text-sm black mr-6 my-2">Rating:</p>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*  @ts-ignore */}
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              className="space-x-4 w-full flex justify-between text-secondary"
              onChange={(v) => setRating(v)}
            />
            {errors?.rating && (
              <p className="text-red-500 text-xs italic">
                {errors?.rating[0]}.
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center pb-6 my-3">
          <button
            type="button"
            className="btn-primary text-px-13 mt-4 mb-4 md:mb-0"
            disabled={loading}
            onClick={() => sendFeedback()}
          >
            {loading
              ? 'Sending Feedback ...'
              : sessionSlug
              ? 'Session Feedback'
              : 'Event Feedback'}
          </button>
        </div>
      </>
    </Modal>
  )
}
