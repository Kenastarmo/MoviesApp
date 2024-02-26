import navLinks from "../../constants/constants";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css'; 

export {};


const Header = () => {

    return (
        <header className="header flex justify-center px-3 py-4 ">
            <div className="max-w-[1100px] flex justify-between grow">
                <Link to="/">
                <div className="logo_container flex  items-center"><p className="logo text-stone-200 text-[24px]">Movies.</p></div>
                </Link>
                {/* <div className="main-div flex items-center relative z-10 p-4 ">
                    <ul className="flex gap-6">
                        {navLinks.map((path : {path:string, name:string}) => {
                            return (
                                <li key={path.path} className="list-none text-black">
                                    <a href={path.path} className="list-none text-stone-200 transition-colors duration-300 ease-in-out hover:text-stone-400 ">{path.name}</a>
                                </li>
                            )
                        }  
                    )}
                    </ul>
                </div> */}
            </div>
            
        </header>
    );
  
};

export default Header;
