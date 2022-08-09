import type { NextPage } from 'next'
import queryString from "query-string"
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
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
    </div>
  )
}

export default Home
