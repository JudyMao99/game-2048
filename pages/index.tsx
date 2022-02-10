import Head from 'next/head'
import Game from '../components/Game'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">
          GAME 2048
        </h1>

        <p className="description">
          ENJOY 2048~
        </p>

        <div>
          <Game />
        </div>
      </main>

      <footer>
          Written by Judy
      </footer>
    </div>
  )
}
