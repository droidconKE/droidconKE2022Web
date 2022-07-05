/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const headers = {
    Authorization: `key=${process.env.NEXT_PUBLIC_FIREBASE_SERVER_KEY}`,
    'Content-Type': 'application/json',
  }
  const topic = process.env.NEXT_PUBLIC_MESSAGING_TOPIC
  const { token } = req.query
  axios
    .post(
      `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`,
      null,
      { headers }
    )
    .then(() => {
      console.log(`Subscribed to "${topic}"`)
      res.status(200).json({ status: 'success' })
    })
    .catch((err: any) => {
      console.log('Unable to subscribe ', err)
      res.status(200).json({ status: 'failed' })
    })
}
