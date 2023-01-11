/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { GetServerSideProps } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { useEffect } from "react";

import { Player } from "../components/Player";
import { SidebarLeft } from "../components/SidebarLeft";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  const { data: session } = useSession()

  // // @ts-ignore
  // useEffect(async (): any => {
  //   const { data } = await axios.get(`https://api.spotify.com/v1/users/${session?.user.id}/playlists`, {
  //     headers: {
  //       'Authorization': `Bearer ${session?.user.accessToken}`
  //     }
  //   })
  //   console.log(data)
  // }, [])





  return (
    <MainLayout
      player={<Player />}
      sidebarLeft={<SidebarLeft />}
      sidebarRight={<div>sidebarRight</div>}
    >
      <div className="p-8 text-[white]">
        {session && session.user ? (
          <>
            Signed in as {session.user?.email} <br />
            {JSON.stringify(session.user.id, null, 2)}
            <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}

      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (!session || !session.user.id) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      }
    }
  }



  return {
    props: {}
  }
}


