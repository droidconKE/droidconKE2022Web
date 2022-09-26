import { ReactElement, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
// import { isServer } from '../../utils/helpers'

export const Modal = ({
  sideImage = '/images/svg/login.svg',
  closeDialog,
  children,
}: {
  // eslint-disable-next-line react/require-default-props
  sideImage?: string
  closeDialog: () => void
  children: ReactElement
}) => {
  const [show, setShow] = useState(false)
  // if (isServer) {
  //   return <p>Loading</p>
  // }
  // const modalRoot = document.getElementById('layout')
  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div>
      {show &&
        ReactDOM.createPortal(
          <div>
            <div
              id="modal-login"
              className="modal-active fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-center justify-center z-40"
            >
              <div className="modal-overlay absolute w-full h-full modal-bg z-30 overflow-hidden" />

              <div className="modal-container bg-white dark:bg-black-dark w-11/12 md:max-w-xl mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
                <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-sm z-50" />
                <div className="modal-content w-full">
                  <div className="flex flex-wrap lg:flex-no-wrap bg-ash-c justify-center">
                    <div className="w-full md:w-1/2 img-log hidden md:grid bg-primary dark:bg-primary-dark">
                      <img src={sideImage} alt="login" />
                    </div>
                    <div className="w-full md:w-1/2 bg-ash-c mb-24 lg:mb-0 justify-center">
                      <button
                        type="button"
                        className="text-xs p-4 modal-close float-right cursor-pointer uppercase text-light dark:text-lighter-dark"
                        onClick={() => closeDialog()}
                      >
                        Cancel
                      </button>
                      <div>{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          document.getElementById('layout')!
        )}
    </div>
  )
}
