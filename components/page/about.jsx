import Image from "next/image";
import Contact from "../contact";

const About = () => {
    return ( 
        <div className="grid justify-center items-center h-[100vh] pt-8 p-8 gap-4" id="About">
            <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-4">
                <div className="md:w-1/2 md:flex md:flex-col  md:items-start flex flex-col gap-3">
                    <h1 className="text-3xl md:text-5xl font-bold bg-[--first-color] w-fit p-2 ">About Me</h1>
                    <div className="flex justify-center md:hidden">
                        <Image src={'/img/aboutR.png'} alt={'About Me'} width={230} height={230}/>
                    </div>
                    <div className="bg-sky-700 shadow-md p-4">
                    <div className="text-3xl md:text-6xl font-bold">
                        <div>Programmer &</div>
                        <div>Tech enthusiast</div>
                    </div>
                    <p className="text-lg md:text-xl mb-6">Hello My Name is Arya Dirham Wijaya Kusmah i&apos;m a programmer. Studied at Politeknik Negeri Cilacap, informatics engineering study program.</p>
                    <Contact>
                        My Contact
                    </Contact>
                </div>
                    </div>
                <div className="hidden md:block">
                    <Image src={'/img/aboutR.png'} alt={'About Me'} width={480} height={480}/>
                </div>
            </div>
        </div>
     );
}
 
export default About;
