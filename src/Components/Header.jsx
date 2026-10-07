
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Header() {
  return (
    <header className="w-full bg-white   ">
        <div className="max-w-6xl mx-auto px-6 py-4 md:flex-row flex flex-col item-center justify-betbeen md:pl-30 ">
{/*Logo */}
<div className="w-40 h-15 rounded-full  flex item-center justyfy-center m-auto">
    <img src={logo} alt="logo" className="w-full" />
</div>

{/*Contact information */}

<div className="text-center m-auto md:pl-20 ">


    <p className="text-lg text-gray-800 font-sans"> Call for free Estimates</p>
   <h2 className="text-2xl font-bold text-gray-800">
  <span>829-273-3112</span>
  <span className="hidden sm:inline">, </span>
  <span className="block sm:inline font-sans">707-084-3946</span>
</h2>
    <p className="text-gray-700"> New Jaganpura patna -27</p>
    <p className="text-gray-800 fornt-media"> Mon-fri: 10:00Am - 6:00Pm </p>
</div>


        </div>




    </header>
   
  );
}

export default Header;