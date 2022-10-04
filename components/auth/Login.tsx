import { useGoogleLogin } from '@react-oauth/google'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from '../../utils/axios'
import { Modal } from '../shared/Modal'

export const Login = ({ closeDialog }: { closeDialog: () => void }) => {
  const { loginUser } = useContext(AuthContext)

  const login = useGoogleLogin({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: async (tokenResponse: any) => {
      // console.log({ tokenResponse })
      await axios
        .post('/social_login/google', {
          access_token: tokenResponse.access_token,
        })
        .then((response) => {
          // console.log({ response })
          loginUser(response.data)
          closeDialog()
        })
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.log('Login Failed')
    },
  })
  return (
    <Modal closeDialog={() => closeDialog()}>
      <div className="w-full h-42 md:h-52 items-center flex px-16 lg:px-8 py-6">
        <button type="button" onClick={() => login()}>
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
