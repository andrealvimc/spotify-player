import { ReactNode, useEffect, useRef, useState } from "react"

type Props = {
  sidebarLeft: ReactNode
  sidebarRight: ReactNode
  player: ReactNode
  children: ReactNode
}

export const MainLayout = ({ player, children, sidebarLeft, sidebarRight }: Props) => {

  return (
    <div className="w-screen relative">

      <div className="[sidebar-left] w-[12.5%] bg-secondary-1 h-[calc(100vh-100px)] fixed left-0 top-0 z-10">
        {sidebarLeft}
      </div>

      <div className="[sidebar-right] w-[12.5%] bg-secondary-1 h-[calc(100vh-100px)] fixed right-0 top-0 z-10">
        {sidebarRight}
      </div>

      <div className="[main] w-[75%] h-[calc(100vh-100px)] bg-secondary-2 absolute left-[12.5%] top-0 z-10">
        {children}
      </div>

      {/* soundtrack */}
      <div className="[player-soundtrack] w-screen bg-neutral-3 h-1 fixed bottom-[100px] z-20 ">
        <div className={`[player-soundtrack-children]  bg-secondary-3 h-1 fixed w-[50%] rounded-r-md`}>
        </div>
      </div>
      <div className="[player] w-screen bg-secondary-2  h-[100px] fixed bottom-0 left-0 z-20">
        {player}
      </div>
    </div>
  )
}