import NAvMenu from "./NavMenu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-fit bg-sky-700 p-3 z-10 shadow-xl">
      <div className="flex justify-between items-center">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/120310980?v=4" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <NAvMenu />
      </div>
    </nav>
  );
};

export default Navbar;
