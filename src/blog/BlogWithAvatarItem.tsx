import React from "react";
import { LearnMore } from "..";
import { Avatar } from "../util/Avatar";
import { Stat } from "../util/Stat";

export type BlogWithAvatarItemProps = {};

export function BlogWithAvatarItem({}: BlogWithAvatarItemProps) {
  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
        CATEGORY
      </span>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        Roof party normcore before they sold out, cornhole vape
      </h2>
      <p className="leading-relaxed mb-8">
        Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
        portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
        hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
        slow-carb etsy tumeric. Cray pug you probably haven't heard of them
        hexagon kickstarter craft beer pork chic.
      </p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full place-content-between">
        <LearnMore />
        <div className="mt-2">
          <Stat views={1200} comments={6} />
        </div>
      </div>
      <Avatar
        imgSrc="https://dummyimage.com/104x104"
        height={12}
        width={12}
        name="Holden Caulfield"
        role="UI DEVELOPER"
      />
    </div>
  );
}
