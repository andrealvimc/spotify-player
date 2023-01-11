
import { Player } from "../components/Player";
import { SidebarLeft } from "../components/SidebarLeft";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      player={<Player />}
      sidebarLeft={<SidebarLeft />}
      sidebarRight={<div>sidebarRight</div>}
    >
      <div>MALUCO</div>
    </MainLayout>
  )
}
