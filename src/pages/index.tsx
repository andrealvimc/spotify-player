/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { GetServerSideProps } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { useEffect } from "react";

import { Player } from "../components/Player";
import { SidebarLeft } from "../components/SidebarLeft";
import { MainLayout } from "../layouts/MainLayout";
import { ApiClient } from "../services/api";

import { Playlist } from "../types/interfaces";

type Props = {
  playlists: Playlist[]
}

export default function Home({ playlists }: Props) {
  const { data: session } = useSession()
  const api = ApiClient();

  // // @ts-ignore
  // useEffect(() => {
  //   api.get(`https://api.spotify.com/v1/users/${session?.user.id}/playlists`).then((res) => {
  //     console.log(res.data.items)
  //   }).catch((err) => console.log(err))

  // }, [session])



  return (
    <MainLayout
      player={<Player />}
      sidebarLeft={<SidebarLeft playlists={playlists} />}
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
  const api = ApiClient();
  const session = await getSession({ req: context.req })

  if (!session || !session.user.id) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      }
    }
  }

  // TODO: GET PLAYLIST FROM API
  // try {
  //   const { data, } = await api.get(`https://api.spotify.com/v1/users/${session?.user.id}/playlists`)
  //   // console.log(request)
  //   return {
  //     props: {
  //       playlists: data.items
  //     }
  //   }
  // } catch (err) {
  //   console.log(err)
  // }



  return {
    props: {
      playlists: []
    }
  }
}


