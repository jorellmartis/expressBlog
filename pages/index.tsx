import Head from 'next/head'
import HomepageAllItems from '@/components/Containers/homepage/HomepageAllItems'

const index = () => {
  return (
    <>
    <Head>
    <title>My page</title>
    </Head>
    <main>
      <HomepageAllItems/>
    </main>
  </>
  )
}

export default index