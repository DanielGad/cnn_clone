import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import '@/components/header.css'
const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");



  return (
    <>
    <div className="header-container bg-black gap-4 justify-between flex font-sans font-normal pt-3 pb-2">
      
      <div className="header-con2 bg-black text-white flex gap-6 font-sans font-normal ml-7">
        <div className="menu-icon w-8 h-8"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {isMenuToggled && (
            <>
            <div className="w-8 h-8" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="x-icon object-cover cursor-pointer"/>
            </div>
            <div className="">
              {!isAboveMediumScreens ? (
                <div className="ham-inside">
                  <input type="text" placeholder="Search CNN..." className="search-input"/>
                  <div className="col-2">
                  <p onClick={() => setIsMenuToggled(!isMenuToggled)}>Edition</p>
                  <p>World</p>
                  <p>US Politics</p>
                  <p>Business</p>
                  <p>Market</p>
                  <p>Health</p>
                  <p>Entertainment</p>
                  <p>Tech</p>
                  <p>Style</p>
                  <p>Travel</p>
                  <p>Sports</p>
                  <p>Watch</p>
                  <p>Features</p>
                  <p>Weather</p>
                  <p>More</p>
                  </div>
                </div>
              ) : (
                <>
                <div style={{backgroundColor: "black", width: "fit-content"}}>HElloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</div>
                </>
              )}
            </div>
            </>
          )}
          <Bars3Icon className="bar-icon object-cover cursor-pointer"/>
        </div>
        
        <div className="logo-div w-8 h-8">
          <img src="/cnn.jpg" alt="cnn-logo" className="cnn-logo fit object-cover cursor-pointer" />
        </div>
        {isAboveMediumScreens && (
          <>
          <div className="navs cursor-pointer">US</div>
        <div className="navs cursor-pointer">World</div>
        <div className="navs cursor-pointer">Politics</div>
        <div className="navs cursor-pointer">Business</div>
        <div className="navs cursor-pointer">Opinion</div>
        <div className="navs cursor-pointer">Health</div>
        <div className="navs cursor-pointer">Entertainment</div>
        <div className="navs cursor-pointer">Style</div>
        <div className="navs cursor-pointer">Travel</div>
        <div className="navs cursor-pointer">Sports</div>
        </>
        )}
        
      </div>

      <div className="header-left bg-black text-white w-max flex gap-6 font-sans font-normal mr-7">
        <div className="navs cursor-pointer">Watch</div>
        <div className="navs cursor-pointer">Listen</div>
        <div style={{whiteSpace: "nowrap"}} className="navs cursor-pointer">Live TV</div>
        {!isAboveMediumScreens && (
          <div className="search-icon-div">
        <img src="/ssss.png" alt="search_icon" width={"28px"} height={"28px"} className="search-icon"/>
        </div>
        )}
        
        <div className="log-in bg-black border rounded-xl p-1 font-bold pl-2 cursor-pointer pr-2 hover:bg-white hover:bg-opacity-30">
          Log In
        </div>
      </div>
    </div>
    </>
  )
}

export default Header