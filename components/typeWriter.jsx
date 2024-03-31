"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <>
      <div className="text-xl md:text-3xl font-bold">
      <span>👋 </span>
        <Typewriter
          words={[
            "Hello",
            "Halo",
            "Hola",
            "Hello World",
            "Bonjour",
            "你好",
            "Hello World",
            "こんにちは",
            "Olá",
            "Hello World",
            "안녕하세요",
          ]}
          loop={true}
          cursor={true}
          typeSpeed={350}
          delaySpeed={2000}
          deleteSpeed={200}
        />
        ,
      </div>
    </>
  );
};

export default TypeWriter;
