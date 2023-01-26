import Head from 'next/head'
import Typography from '@/components/UIKit/Typography'
import FlexBox from '@/components/UIKit/FlexBox'
import FeaturedPost from '@/components/Containers/homepage/FeaturedPost'
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