import Image from "next/image"
import { Books, House, MagnifyingGlass } from "phosphor-react"


export const SidebarLeft = () => {

  return (
    <div>

      <div className="w-full px-2 py-4 flex flex-col gap-1">
        <div
          className="cursor-pointer flex gap-2 items-center w-full px-2 py-1 hover:bg-neutral-2 hover:bg-opacity-20 hover:text-secondary-3 rounded-md transition-all"
        >
          <House size={24} weight="light" color="#B2B2B2" />
          <div className="text-neutral-1  text-sm">Home</div>
        </div>

        <div
          className="cursor-pointer flex gap-2 items-center w-full px-2 py-1 hover:bg-neutral-2 hover:bg-opacity-20 hover:text-secondary-3 rounded-md transition-all"
        >
          <MagnifyingGlass size={24} weight="light" color="#B2B2B2" />
          <div className="text-neutral-1  text-sm">Search</div>
        </div>

        <div
          className="cursor-pointer flex gap-2 items-center w-full px-2 py-1 hover:bg-neutral-2 hover:bg-opacity-20 hover:text-secondary-3 rounded-md transition-all"
        >
          <Books size={24} weight="light" color="#B2B2B2" />
          <div className="text-neutral-1  text-sm">Library</div>
        </div>
      </div>


      <div className="w-full px-2 py-4 flex flex-col gap-2 mb-3">
        <div className="cursor-pointer flex gap-2 items-center w-full px-2 py-1 ">
          <Image src="./AddPlaylist.svg" height={20} width={20} alt="" />
          <div className="text-neutral-1 font-normal text-sm">Create Playlist</div>
        </div>
        <div className="cursor-pointer flex gap-2 items-center w-full px-2 py-1 ">
          <Image src="./Likedsongs.svg" height={20} width={20} alt="" />
          <div className="text-neutral-1 font-normal text-sm">Liked Songs</div>
        </div>
      </div>

      <div className="[separator] h-[1px] bg-neutral-1 bg-opacity-20 mx-4 flex shadow-2xl"></div>

      <div className="playlists flex-1 max-h-[calc(100vh-252px-100px)] px-4 my-2 flex flex-col gap-1 w-full overflow-y-auto">
        {[1, 2, 3, 4, 4, 3, 3, 3, 3, 35, 3, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 'alvim', 4, 4, 4, 4, 4, 4, 4, 4, 100].map((item, index) => {
          return (
            <div className="text-neutral-1 text-sm mb-1" key={index}>{item}</div>
          )
        })}
      </div>


    </div>
  )
}