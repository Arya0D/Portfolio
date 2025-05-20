import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./projectCard";
import Image from "next/image";
import Link from "next/link"

const Project = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ProjectCard title="Sistem Kepegawaian PCNU Ma'arif Cilacap">
              <Link href={"https://tefa-1.abm.my.id"} _blank className="relative flex justify-center items-center h-full bg-slate-300 text-3xl ">
               <Image src={"/img/project .png"} alt="" fill />
              </Link>
            </ProjectCard>
          </CarouselItem>
          <CarouselItem>
            <ProjectCard title="Sistem Kepegawaian PCNU Ma'arif Cilacap">
               <Link href={"https://tefa-1.abm.my.id"} _blank className="relative flex justify-center items-center h-full bg-slate-300 text-3xl ">
               <Image src={"/img/project-1.png"} alt="" fill />
              </Link>

            </ProjectCard>
          </CarouselItem>
  <CarouselItem>
            <ProjectCard title="Sistem Kepegawaian PCNU Ma'arif Cilacap">
               <Link href={"https://tefa-1.abm.my.id"} _blank className="relative flex justify-center items-center h-full bg-slate-300 text-3xl ">
               <Image src={"/img/project-2.png"} alt="" fill />
              </Link>

            </ProjectCard>
          </CarouselItem>

 <CarouselItem>
            <ProjectCard title="Sistem Kepegawaian PCNU Ma'arif Cilacap">
               <Link href={"https://tefa-1.abm.my.id"} _blank className="relative flex justify-center items-center h-full bg-slate-300 text-3xl ">
               <Image src={"/img/project-3.png"} alt="" fill />
              </Link>

            </ProjectCard>
          </CarouselItem>

        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Project;
