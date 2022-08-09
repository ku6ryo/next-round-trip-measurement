import type { NextPage } from 'next'

const Home: NextPage = () => {
  const jump = () => {
    location.href = "/measure?start=" + new Date().getTime()
  }
  return (
    <div>
      <button onClick={jump}>measure</button>
    </div>
  )
}

export default Home
