import axios from './axios'

export async function getServerSideProps() {
  const schedules = () => {
    axios
      .get('/events/droidconke-2022-281/rooms')
      .then((res) => console.log('here', res.data))
      .catch((error) => console.log(error))
  }
  return { props: { schedules } }
}
