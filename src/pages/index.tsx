import { Player } from "../components/Player";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      player={<Player />}
      sidebarLeft={<div>sidebarLeft</div>}
      sidebarRight={<div>sidebarRight</div>}
    >
      <div>MALUCO</div>
    </MainLayout>
  )
}
