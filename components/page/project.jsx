import Icon from "../icons";
import Project from "../project";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
const ProjectPage = () => {
    return (  
        <div className="grid justify-center items-center h-[100vh] pt-[6rem] p-8" id="Project">
            <div className="grid gap-8" >
                <h1 className="text-3xl md:text-5xl font-bold bg-[--first-color] w-fit p-2">Project</h1>
            <div className="bg-sky-700 shadow-xl rounded-md p-4">
                <p className="text-lg text-white">Technology i use: </p>
                <div  className="grid grid-cols-3 md:grid-cols-6">
                <Icon info={"React.js"} color={"rgb(24, 119, 242)"}>
            <FaReact/>
                </Icon>
                <Icon info={"Tailwind"} color={"rgb(56, 178, 172)"} >
                <SiTailwindcss />
                </Icon>
                <Icon info={"Next.js"}>
                    <SiNextdotjs/>
                </Icon>
                <Icon info={"React.js"} color={"rgb(57, 181, 74);"}>
            <SiNodedotjs/>
                </Icon>
                <Icon info={"Typescript"} color={"rgb(47, 116, 192)"}>
                <SiTypescript />
                </Icon>
                <Icon info={"React.js"}>
                    <SiExpress/>
                </Icon>
                </div>
            </div>
                <Project/>
            </div>
        </div>
    );
}
 
export default ProjectPage;