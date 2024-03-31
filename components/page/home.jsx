import Image from "next/image";
import TypeWriter from "../typeWriter";
import Contact from "../contact";


const Home = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center p-4" id="Home">
      <div className="flex flex-col md:flex-row-reverse gap-4 items-center justify-center md:justify-around w-full">
        <div className="relative w-[230px] h-[230px] md:w-[450px] md:h-[450px]">
          <Image src={"/img/hero.jpeg"} alt="" fill />
        </div>
        <div className="grid gap-2 md:w-1/2">
          <TypeWriter />
          <div className="grid gap-2 md:gap-3 text-3xl md:text-7xl">
            <div>My name is</div>
            <div className="text-[--first-color] font-bold">Arya Dirham</div>
            <div className="text-[--first-color] font-bold">Wijaya Kusumah</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
