import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ProjectCard title="no project">
              <div className="flex justify-center items-center h-full bg-slate-300 text-3xl ">
                <h1>No Project Yet!!!</h1>
              </div>
            </ProjectCard>
          </CarouselItem>
          <CarouselItem>
            <ProjectCard title="no project">
              <div className="flex justify-center items-center h-full bg-slate-300 text-3xl">
                <h1>No Project Yet!!!</h1>
              </div>
            </ProjectCard>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Project;
