import Image from "next/image";
import TypeWriter from "../typeWriter";
import Contact from "../contact";
import { Button } from "../ui/button";

const Home = () => {
    return ( 
        <div className="h-[100vh] flex justify-center items-center p-4" id="Home">
            <div className="flex flex-col md:flex-row-reverse gap-4 items-center justify-center md:justify-around w-full">
                <div className="relative w-[230px] h-[230px] md:w-[450px] md:h-[450px]">
                    <Image src={"/img/hero.jpeg"} alt="" fill/>
                </div>
                <div className="grid gap-2 md:w-1/2">
                    <TypeWriter/>
                    <div className="grid gap-3 text-3xl md:text-7xl">
                       <div>My Name is</div>
                       <div className="bg-sky-800 text-[--first-color] font-bold p-2 shadow-xl">Arya Dirham</div>
                       <div className="bg-sky-800  text-[--first-color] font-bold p-2 shadow-xl">Wijaya Kusumah</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;