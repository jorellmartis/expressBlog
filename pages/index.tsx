import Head from 'next/head'
import HomepageAllItems from '@/components/Containers/homepage/HomepageAllItems'
import { useSession} from "next-auth/react"
const index = () => {
  const { data: session } = useSession()
  return (
    <>
    <Head>
    <title>My page</title>
    </Head>
    <main>
      {session ? (<span>{`Welcome mother ${session?.user?.name}`}</span>) : (<span>{`Please login mother`}</span>)}
      <HomepageAllItems/>
    </main>
  </>
  )
}

export default index