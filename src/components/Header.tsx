import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import '@/components/header.css'
const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");
  const smallScreen = useMediaQuery("(max-width: 959px)")


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
              {smallScreen && (
                <div className="ham-inside bg-black mt-2.5 m-auto text-center w-screen text-2xl">
                  <input type="text" placeholder="Search CNN..." className="search-input m-auto p-2 text-[20px] bg-white w-[200%]"/>
                  <div className="col-2">
                  <h1>Edition</h1>
                  <h1>World</h1>
                  <h1>US Politics</h1>
                  <h1>Business</h1>
                  <h1>Market</h1>
                  <h1>Health</h1>
                  <h1>Entertainment</h1>
                  <h1>Tech</h1>
                  <h1>Style</h1>
                  <h1>Travel</h1>
                  <h1>Sports</h1>
                  <h1>Watch</h1>
                  <h1>Features</h1>
                  <h1>Weather</h1>
                  <h1>More</h1>
                  </div>
                </div>
              )}
            </div>
            </>
          )}
          <Bars3Icon className="bar-icon object-cover cursor-pointer"/>
        </div>
        
        <div className="logo-div w-8 h-8">
          <img src="/cnn.jpg" alt="cnn-logo" className="cnn-logo fit object-cover cursor-pointer" />
        </div>
        {isAboveMediumScreens ? (
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
        ) : (
          ""
        )}
        
      </div>

      <div className="header-left bg-black text-white w-max flex gap-6 font-sans font-normal mr-7">
        <div className="navs cursor-pointer">Watch</div>
        <div className="navs cursor-pointer">Listen</div>
        <div className="navs cursor-pointer">Live TV</div>
        {!smallScreen && (
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