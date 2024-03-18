"use client";

import Contact from "./contact";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "./ui/popover";
import { IoMdMenu } from "react-icons/io";

const NAvMenu = () => {
  const handleProject = () => {
    const project = document.getElementById("Project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHome = () => {
    const home = document.getElementById("Home");

    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSkill = () => {
    const skill = document.getElementById("Skill");
    if (skill) {
      skill.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAbout = () => {
    const about = document.getElementById("About");

    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger>
            <IoMdMenu className="text-3xl text-white hover:text-[rgb(215,181,30)] focus:text-[rgb(215,181,30)] " />
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[10rem] bg-sky-700 text-white border-2 border-[rgb(215,181,30)]"
          >
            <div className="grid gap-3 text-center">
              <Button variant="ghost" onClick={handleHome}>
                Home
              </Button>
              <Button variant="ghost" onClick={handleAbout}>
                About Me
              </Button>
              <Button variant="ghost" onClick={handleSkill}>
                Skill
              </Button>
              <Button variant="ghost" onClick={handleProject}>
                Project
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden md:flex items-center gap-4 text-[rgb(215,181,29)]">
        <Button variant="ghost" size="lg" onClick={handleHome}>
          Home
        </Button>
        <Button variant="ghost" size="lg" onClick={handleAbout}>
          About
        </Button>
        <Button variant="ghost" size="lg" onClick={handleSkill}>
          Skill
        </Button>
        <Button variant="ghost" size="lg" onClick={handleProject}>
          Project
        </Button>
        <Contact>Contact</Contact>
      </div>
    </>
  );
};

export default NAvMenu;
