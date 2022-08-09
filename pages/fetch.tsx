import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import queryString from "query-string"
import { useEffect, useState } from 'react'

type Props = {
  text: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const res = await axios.get("https://google.com")
  return {
    props: {
      text: res.data
    }
  }
}

const Home: NextPage<Props> = ({
  text
}: Props) => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const query = queryString.parse(location.search)
    const start = Number(query.start)
    const time = new Date().getTime() - start
    setTime(time)
  }, [])
  return (
    <div>
      <div>{time}</div>
      <pre>{text}</pre>
    </div>
  )
}

export default Home
