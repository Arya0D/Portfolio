import Icon from "@/components/icons";
import Project from "@/components/project";
import TypeWriter from "@/components/typeWriter";
import Image from "next/image";
import Link from "next/link";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const page = () => {
  return (
    <div className="p-5">
      <div
        className="flex flex-col-reverse gap-2 justify-center items-center h-[100dvh] md:flex-row md:justify-around md:items-center"
        id="Home"
      >
        <div>
          <TypeWriter />
          <div className="text-[2.3rem] md:text-7xl">
            My Name Is
            <div className="bg-[rgb(215,181,30)] text-black my-1 w-fit">
              {" "}
              Arya Dirham{" "}
            </div>
            <div className="bg-sky-700 text-white w-fit"> Wijaya Kusumah </div>
          </div>
        </div>
        <div className="relative w-[270px] h-[270px] md:w-[450px] md:h-[450px] opacity-85">
          <Image src="/img/hero.jpeg" fill alt="" />
        </div>
      </div>
      <div
        className="mb-[4rem] md:flex md:flex-row-reverse md:justify-between md:items-center md:h-[100vh]"
        id="About"
      >
        <div className="md:w-1/2 grid gap-[1.3rem]">
          <h2 className="text-xl md:text-3xl font-bold bg-[rgb(215,181,30)] w-fit p-3 ">
            ABOUT ME
          </h2>
          <div className="flex md:hidden justify-center">
            <Image src="/img/aboutR.png" width={250} height={250} alt="" />
          </div>

          <h1 className="text-3xl md:text-6xl font-bold">
            Programmer & <div> Web Developer</div>
          </h1>
          <p className="text-sm md:text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            repellat atque rerum perferendis amet. Omnis inventore maxime labore
            dicta corporis aliquid quibusdam corrupti amet dignissimos
            aspernatur. Esse quibusdam rem illo distinctio maiores possimus
            perferendis numquam labore mollitia exercitationem, itaque facilis
            quo suscipit rerum culpa blanditiis architecto! Pariatur voluptates
            harum aperiam.
          </p>
        </div>
        <div className="hidden md:block">
          <Image src="/img/aboutR.png" width={400} height={400} alt="" />
        </div>
      </div>

      <div
        className="flex flex-col justify-center gap-2 mb-[4rem] bg-sky-700 p-5 rounded-lg shadow-xl md:h-[100vh]"
        id="Skill"
      >
        <h1 className="grid justify-center text-4xl md:text-6xl font-bold mb-4 bg-[rgb(215,181,30)] w-fit p-3 text-center">
          Skills
        </h1>
        <h1 className="text-xl text-white">Technology that i use:</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 justify-center items-center justify-items-center">
          <Icon info="React.js" color="rgb(24, 119, 242)">
            <FaReact />
          </Icon>
          <Icon info="Node.js" color="rgb(57, 181, 74)">
            <FaNodeJs />
          </Icon>
          <Icon info="Express">
            <SiExpress />
          </Icon>
          <Icon info="Next.js">
            <SiNextdotjs />
          </Icon>
          <Icon info="Tailwind" color="rgb(56, 189, 248)">
            <SiTailwindcss />
          </Icon>
          <Icon info="TypeScript" color="rgb(47, 116, 192)">
            <SiTypescript />
          </Icon>
        </div>
      </div>
      <div className="grid gap-4 h-[100vh]">
        <h1 className="text-4xl md:text-6xl font-bold bg-[rgb(215,181,30)] w-fit p-2">
          My Project
        </h1>
        <Project />
      </div>
    </div>
  );
};

export default page;
