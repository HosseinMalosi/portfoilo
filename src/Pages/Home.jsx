import React from "react";
import Bar from "../Components/Bar";
import { Instagram, Telegram, Linkedin, Github } from "react-bootstrap-icons";
import GlassyCard from "../Components/GlassyCard";
import x from "../asset/portrait.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[hsl(0,0%,9%)] h-screen max-h-full px-4 py-2 gap-2 text-white overflow-y-auto">
      <div className=" basis-2/3 md:basis-3/5">
        <GlassyCard className="h-full bg-[rgb(34,95,80)] rounded-lg pt-5 p-3">
          <div className=" grid grid-cols-2  gap-2">
            <Bar now={5} label="HTML" />
            <Bar now={4} label="CSS" />
            <Bar now={3} label="Bootstrap" />
            <Bar now={4} label="Tailwind" />
            <Bar now={4} label="JS" />
            <Bar now={3} label="JQuery" />
            <Bar now={4} label="React" />
            <Bar now={3.5} label="Redux" />
            <Bar now={3} label="React-Router" />
            <Bar now={3} label="Express JS" />
            <Bar now={3} label="MongoDB" />
          </div>
        </GlassyCard>
      </div>
      <div className="flex flex-col basis-1/3 md:basis-2/5 md:gap-3 gap-3">
        <GlassyCard className="flex md:flex-col w-full min-h-[10.9rem] max-h-[10.9rem] md:h-3/6 bg-[rgb(53,54,129)] rounded-lg">
          <div className="flex justify-between h-full p-1">
            <div className="flex items-center pl-10 w-1/3 ">
              <div className=" grid grid-cols-2 grid-rows-2 gap-6">
                <a
                  className=" w-9 bg-slate-300 text-fuchsia-700 p-1 rounded text-3xl hover:text-fuchsia-700"
                  href=""
                >
                  <Instagram />
                </a>
                <a
                  className="w-9 bg-slate-300 text-sky-600 p-1 rounded text-3xl hover:text-sky-600"
                  href=""
                >
                  <Telegram />
                </a>
                <a
                  className="w-9 bg-slate-300 text-blue-800 p-1 rounded text-3xl hover:text-blue-800"
                  href=""
                >
                  <Linkedin />
                </a>
                <a
                  className="w-9 bg-slate-300 text-slate-800 p-1 rounded text-3xl hover:text-slate-800"
                  href=""
                >
                  <Github />
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
        <GlassyCard className=" lg:basis-1/3 md:h-max  h-max bg-[rgb(53,54,129)] rounded-lg text-right pt-1 pb-3 px-4">
          <h1 className=" font-[BARAN] font-semibold text-[26px] mb-2">
            : درباره ی من
          </h1>
          <article className=" text-right md:text-lg text-base">
            من حسین ملوسی هستم و یک توسعه دهنده وب با تجربه 2 ساله هستم تحصیلات
            من شامل مدرک دیپلم در رشته ریاضی - فیزیک می‌شود. من توانایی ارتباطی
            بسیار خوبی دارم که شامل مسلط بودن به زبان انگلیسی و المانی می‌شود.
            همچنین من ویژگی های مثبت شخصیتی مانند قابلیت حل مشکل بالا ,خلاقیت ,
            مسئولیت پذیری و هوش بالا دارم که به من در انجام وظایف شغلی کمک
            می‌کند
            <br />
            من به دنبال فرصتی هستم که بتوانم در یک محیط پویا و دوستانه کار کنم و
            به ارائه خدمات به مشتریان و یا مشارکت در پروژه‌های جدید کمک کنم. من
            از فرصت های یادگیری و پیشرفت برای بهبود و ارتقا دادن مهارت های شغلی
            خود بسیار علاقه مند هستم
          </article>
        </GlassyCard>
      </div>
    </div>
  );
};

export default Home;
