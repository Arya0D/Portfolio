import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const Tab = ({ icon, socialMedia, href }) => {
  return (
    <div className="flex border-2 border-[rgb(215,181,30)] p-3 rounded-lg hover:bg-[rgb(215,181,30)] ">
      {icon && (
        <Button variant="link">
          <Link href={href}>
            <div className="flex gap-2 items-center">
              <div className="border-r-2 pr-2 border-[rgb(215,181,30)] w-fit">
                <Image src={icon} width={50} height={50} alt="" />
              </div>
              <p className="text-2xl">{socialMedia}</p>
            </div>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Tab;
