import { Modal } from '../shared/Modal'

export const Login = ({ closeDialog }: { closeDialog: () => void }) => {
  return (
    <Modal closeDialog={() => closeDialog()}>
      <div className="w-full h-42 md:h-52 items-center flex px-16 lg:px-8 py-6">
        <button type="button">
          <img
            className="cursor-pointer mt-10 md:mt-4"
            src="/images/btn_google_signin_light_normal_web@2x.png"
            alt="login"
          />
        </button>
      </div>
    </Modal>
  )
}
