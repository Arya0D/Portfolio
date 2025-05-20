import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const ProjectCard = ({ children, title }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-[500px]">{children}</CardContent>
     
      </Card>
    </>
  );
};

export default ProjectCard;
