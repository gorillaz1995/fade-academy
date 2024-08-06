import React from "react";
import Image from "next/image";
import heroImage from "./assets/hero_try.webp";

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden z-0">
      {/* Two-Color Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-[#E5E4E2] z-0"></div>
        <div className="absolute top-1/4 left-0 w-full h-3/4 bg-[#001D3D] z-0"></div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto rounded-2xl overflow-hidden w-96 h-96 md:w-[780px] md:h-[70vh] animate-breathe">
        <div className="relative h-full w-full z-10">
          <Image
            src={heroImage}
            alt="Hero"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            quality={100}
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Ciprian Text Container */}
      <div
        className="absolute text-[#dce0d9]"
        style={{ top: "2%", left: "5%" }}
      >
        <h1
          className="flex items-baseline text-7xl xl:text-9xl z-10"
          style={{ position: "absolute", top: "0", left: "0px" }}
        >
          <span className="font-luxurious-script text-8xl md:text-[10rem] xl:text-[14rem] text-[#FFD60A] z-20">
            C
          </span>
          <span className="font-familjen-grotesk  text-6xl xl:text-6xl text-[#001D3D] z-10">
            iprian
          </span>
        </h1>
      </div>

      {/* Ungureanu Text Container */}
      <div
        className="absolute text-[#fbf6ef]"
        style={{ top: "15%", left: "11%" }}
      >
        <h1
          className="flex items-baseline text-3xl xl:text-8xl z-20"
          style={{ position: "absolute", top: "-70px", left: "141px" }}
        >
          <span className="font-luxurious-script text-8xl md:text-[10rem] xl:text-[11rem] text-[#FFD60A] z-20">
            U
          </span>
          <span className="font-familjen-grotesk  text-4xl xl:text-5xl  text-[#001D3D]">
            ngureanu
          </span>
        </h1>
      </div>

      {/* FADE ACADEMY Text Container */}
      <div
        className="absolute text-[#FFC300] w-full text-center"
        style={{ top: "26%" }}
      >
        <h1 className="font-stint-ultra-expanded font-thin  text-4xl md:text-[5rem] xl:text-[11rem] border-b-2 border-transparent border-b-[#e0e1dd] ">
          FADE ACADEMY
        </h1>
      </div>

      {/* Paragraph Text Container */}
      <div
        className="absolute text-[#ead7c3] w-full text-center lg:w-auto lg:text-right lg:max-w-2xl"
        style={{
          top: "33%",
          left: "0",
          right: "0",
          margin: "auto",
          maxWidth: "90%",
        }}
      >
        <p
          className="font-pontano-sans text- md:text-2xl xl:text-3xl md:mt-5 text-[#e0e1dd] z-30"
          style={{
            position: "relative",
          }}
        >
          Cariera ta in frizerie incepe sub indrumarea celui mai bun, Ciprian
          Ungureanu! Acest curs este ideal pentru incepatori, oferind toate
          tehnicile de baza si secretele necesare pentru a excela in aceasta
          arta! Formam profesionisti recunoscuti pe plan international.
        </p>
      </div>
    </main>
  );
};

export default Home;
