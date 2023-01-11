import { useSession, signIn, signOut } from "next-auth/react"

import { Player } from "../components/Player";
import { SidebarLeft } from "../components/SidebarLeft";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  const { data: session } = useSession()

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
            {JSON.stringify(session, null, 2)}
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
