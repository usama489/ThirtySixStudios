import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useState,useEffect} from 'react';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Header = ({toggleTheme}) => {
  
   const[musicIcon,setMusicIcon] = useState(false);
   


  return (
    <>
      <div className=" flex absolute h-[7vh] min-w-[100%] p-1 z-10  justify-between items-center">
        <div className="left-nav-bar font-medium">Thirtysixstudio</div>
        <div className="middle-nav-bar border border-gray-100 w-[6vw] flex justify-evenly items-center rounded-2xl cursor-pointer">
            <div className="icon-container">
            <LightModeIcon  onClick={toggleTheme}/>
            </div>
            
            <div className="icon-container">
            <DarkModeIcon  onClick={toggleTheme}/></div>

            </div>
           
        <div className="right-nav-bar ">
          <div className="flex justify-evenly w-[35vw] font-medium">
            <span>What we do</span>
            <span>Who we are</span>
            <span>How we give back</span>
            <span>Talk to us</span>
          </div>
        </div>
        <div className="right-corner-nav-bar cursor-pointer border-2 border-gray-100 rounded-full  hover:border-gray-500" onClick={()=>{setMusicIcon(!musicIcon)}}>{musicIcon ? <GraphicEqIcon/> : <MoreHorizIcon/> } </div>
      </div>
    </>
  );
};
export default Header;
