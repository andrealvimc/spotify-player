/* eslint-disable @next/next/no-img-element */
import { FastForward, HeartStraight, Monitor, Play, Queue, Repeat, Rewind, Shuffle, SpeakerHigh } from "phosphor-react";

export const Player = () => {

  const url = "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
  return (
    <div className="flex h-[100px] justify-center items-center px-4 text-secondary-3" >
      {/* left */}
      <div className="flex items-center">
        <img src={url} className="w-[60px] h-[60px]" alt="" />
        <div className="ml-2 flex flex-col gap-1">
          <div className="text-xs text-secondary-3 cursor-pointer">Blinding Lights</div>
          <div className="text-[10px] text-neutral-1 cursor-pointer">The Weeknd</div>
        </div>
        <div className="ml-3 cursor-pointer">
          <HeartStraight size={20} weight="light" color="#B2B2B2" />
        </div>

      </div>
      {/* left */}
      {/* mid */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-4 items-center justify-center">
          <div className="cursor-pointer">
            <Shuffle size={20} weight="light" color="#B2B2B2" />
          </div>
          {/* Rewind */}
          <div className="cursor-pointer">
            <Rewind size={20} weight="light" color="#B2B2B2" />
          </div>
          <div className="cursor-pointer">
            <Play size={26} weight="fill" color="#B2B2B2" />
          </div>
          <div className="cursor-pointer">
            <FastForward size={20} weight="light" color="#B2B2B2" />
          </div>
          <div className="cursor-pointer">
            <Repeat size={20} weight="light" color="#B2B2B2" />
          </div>
        </div>
      </div>
      {/* mid */}
      {/* right */}
      <div className="flex gap-4 items-center">
        <div className="text-neutral-1 text-xs">1:23 / 3:42</div>
        <div className="cursor-pointer">
          <Queue size={20} weight="light" color="#B2B2B2" />
        </div>
        <div className="cursor-pointer">
          <Monitor size={20} weight="light" color="#B2B2B2" />
        </div>
        <div className="cursor-pointer flex gap-2 items-center">
          <SpeakerHigh size={20} weight="light" color="#B2B2B2" />
          {/* <SpeakerLow size={20} weight="light" color="#B2B2B2" /> */}
          {/* <SpeakerNone size={20} weight="light" color="#B2B2B2" /> */}
          {/* <SpeakerX size={20} weight="light" color="#B2B2B2" /> */}
          <div className="w-[72px] h-1 bg-neutral-2 rounded-full">
            <div className="w-[50px] h-1 bg-neutral-1 rounded-full"></div>
          </div>
        </div>
      </div>
      {/* right */}
    </div>
  );
};
