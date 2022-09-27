import Rating from 'react-rating'
import { Modal } from '../shared/Modal'

export const SessionFeedback = ({
  closeDialog,
}: {
  closeDialog: () => void
}) => {
  return (
    <Modal
      sideImage="/images/svg/feedback-1.svg"
      closeDialog={() => closeDialog()}
    >
      <>
        <div className="w-full px-4 lg:px-8 pt-6">
          <p className="text-2xl font-black lowercase mt-4">Feedback</p>
          <p className="text-sm black mt-4">
            Kindly leave your honest feedback to help us make it even better.
            Cheers : )
          </p>
          <textarea
            id="feed-message"
            rows={4}
            className="appearance-none block w-full bg-lighter text-gray-700 rounded py-1 px-1 leading-tight mt-4 text-sm"
          />
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
              onChange={() => {
                //
              }}
            />
          </div>
        </div>
        <div className="flex justify-center pb-6 my-3">
          <button
            type="button"
            className="btn-primary text-px-13 mt-4 mb-4 md:mb-0"
          >
            Session Feedback
          </button>
        </div>
      </>
    </Modal>
  )
}
