import NAvMenu from "./NavMenu";
import Contact from "./contact";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-fit bg-sky-700 p-3 z-10 shadow-xl">
      <div className="flex justify-between items-center">
        <Contact />
        <NAvMenu />
      </div>
    </nav>
  );
};

export default Navbar;
