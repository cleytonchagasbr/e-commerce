import Head from 'next/head'

type Props = {
  title: string;
};

export default function Home({ title = "Next js Cleyton" }: Props ) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}