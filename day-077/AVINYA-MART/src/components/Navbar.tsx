import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-white shadow-lg mb-3 flex justify-between items-center p-4">
      <div className="flex space-x-4 me-auto">    {/*me-autoadded */}
        <Link to={"/"}>Home</Link>
        <Link to={"/store"}>Store</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <button className="w-[3rem] h-12 outline-offset-0 rounded-full relative"> {/*Outline : Primary*/ }
        
      {/*Create SVG Here */}
    SVG CART
     <div className="w-8 h-8 rounded-full bg-red-500 flex justify-center items-center text-white ml-5">3</div>
      </button>
    </div>
  );
};

export default Navbar;
