import type { NextPage } from 'next'

const Home: NextPage = () => {
  const jumpToSimple = () => {
    location.href = "/measure?start=" + new Date().getTime()
  }
  const jumpToFetch = () => {
    location.href = "/fetch?start=" + new Date().getTime()
  }
  return (
    <div>
      <button onClick={jumpToSimple}>simple</button>
      <button onClick={jumpToFetch}>fetch</button>
    </div>
  )
}

export default Home
