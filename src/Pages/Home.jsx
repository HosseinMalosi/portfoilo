import React from "react";
import GlassyCard from "../Components/GlassyCard";
import x from "../asset/portrait.jpg"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[hsl(0,0%,9%)] h-screen max-h-full px-4 py-2 gap-2 text-white">
      <div className=" basis-2/3 md:basis-3/5">
        <GlassyCard className="h-full bg-[rgb(34,95,80)] rounded-lg">
          dawda
        </GlassyCard>
      </div>
      <div className="flex flex-col basis-1/3 md:basis-2/5 md:gap-3 gap-1">
        <GlassyCard className="flex lg:md:basis-2/3 md:flex-col w-full h-3/4 md:h-4/6 bg-[rgb(53,54,129)] rounded-lg">
         <div className="flex justify-center basis-2/4"><img  className="md:h-2/3 md:w-40 lg:h-2/3 lg:w-52 lg:scale-75 bg-[rgb(59,61,145)] shadow-2xl p-2 rounded-[100%]" src={x} alt="" /></div> 
         <div className="basis-2/4">adw</div>
        </GlassyCard>
        <GlassyCard className="hidden lg:md:basis-1/3 md:block h-1/2 md:h-2/4 bg-[rgb(53,54,129)] rounded-lg">
          dawda
        </GlassyCard>
      </div>
    </div>
  );
};

export default Home;
