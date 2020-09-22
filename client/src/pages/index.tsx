import Head from 'next/head'

export default function Home({ title = `Next js Cleyton` }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
