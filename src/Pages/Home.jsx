import React from "react";
import { Instagram, Telegram, Linkedin, Whatsapp } from "react-bootstrap-icons";
import GlassyCard from "../Components/GlassyCard";
import x from "../asset/portrait.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[hsl(0,0%,9%)] h-screen max-h-full px-4 py-2 gap-2 text-white overflow-hidden">
      <div className=" basis-2/3 md:basis-3/5">
        <GlassyCard className="h-full bg-[rgb(34,95,80)] rounded-lg">
          dawda
        </GlassyCard>
      </div>
      <div className="flex flex-col basis-1/3 md:basis-2/5 md:gap-3 gap-1">
        <GlassyCard className="flex md:flex-col w-full min-h-[10.9rem] max-h-[10.9rem] md:h-3/6 bg-[rgb(53,54,129)] rounded-lg">
          <div className="flex justify-between h-full p-1">
            <div className="flex items-center pl-10 w-1/3 ">
              <div className=" grid grid-cols-2 grid-rows-2 gap-6">
                <a
                  className=" bg-slate-300 text-fuchsia-700 p-1 rounded text-3xl hover:shadow-lg"
                  href=""
                >
                  <Instagram />
                </a>
                <a
                  className="bg-slate-300 text-sky-600 p-1 rounded text-3xl hover:shadow-lg"
                  href=""
                >
                  <Telegram />
                </a>
                <a
                  className="bg-slate-300 text-blue-800 p-1 rounded text-3xl hover:shadow-lg"
                  href=""
                >
                  <Linkedin />
                </a>
                <a
                  className="bg-slate-300 text-green-600 p-1 rounded text-3xl hover:shadow-lg"
                  href=""
                >
                  <Whatsapp />
                </a>
              </div>
            </div>
            <img
              className="lg:h-40 md:h-40 md:w-40   bg-[rgb(59,61,145)] shadow-2xl p-2 rounded-[100%]"
              src={x}
              alt=""
            />
          </div>
        </GlassyCard>
        <GlassyCard className="hidden lg:basis-1/3 md:basis-1/3 md:h-4/4 md:block h-1/2 bg-[rgb(53,54,129)] rounded-lg text-right pt-1 pb-5 px-4">
          
            <h1 className=" font-[BARAN] font-semibold text-[26px]">
              : درباره ی من
            </h1>
            <article className=" text-right text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </article>
        </GlassyCard>
      </div>
    </div>
  );
};

export default Home;
