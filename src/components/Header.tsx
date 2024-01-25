import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import '@/components/header.css'
const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");



  return (
    <>
    <div className="header-container">
      
      <div className="header-con2">
        <div className="menu-icon"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {isMenuToggled && (
            <>
            <div onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="x-icon"/>
            </div>
            <div className="">
            </div>
            </>
          )}
          <Bars3Icon className="bar-icon"/>
        </div>
        
        <div className="logo-div">
          <img src="/cnn.jpg" alt="cnn-logo" className="cnn-logo"/>
        </div>
        {isAboveMediumScreens && (
          <>
          <div className="navs">US</div>
        <div className="navs">World</div>
        <div className="navs">Politics</div>
        <div className="navs">Business</div>
        <div className="navs">Opinion</div>
        <div className="navs">Health</div>
        <div className="navs">Entertainment</div>
        <div className="navs">Style</div>
        <div className="navs">Travel</div>
        <div className="navs">Sports</div>
        </>
        )}
        
      </div>

      <div className="header-left">
        <div className="navs">Watch</div>
        <div className="navs">Listen</div>
        <div style={{whiteSpace: "nowrap"}} className="navs">Live TV</div>
        {isAboveMediumScreens && (
          <div className="search-icon-div">
        <img src="/ssss.png" alt="search_icon" width={"28px"} height={"28px"} className="search-icon"/>
        </div>
        )}
        
        <div className="log-in">
          Log In
        </div>
      </div>
    </div>
    </>
  )
}

export default Header