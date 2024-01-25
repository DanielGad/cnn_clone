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
                <div className='footer'>
      <>
      <div className='footer-link'>
        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>World</h3>
            <div className='llll'>Africa</div>
            <div className='llll'>Americas</div>
            <div className='llll'>Asia</div>
            <div className='llll'>Australia</div>
            <div className='llll'>China</div>
            <div className='llll'>Europe</div>
            <div className='llll'>India</div>
            <div className='llll'>Middle East</div>
            <div className='llll'>United Kingdom</div>
          </div>
          <div>
            <h3 className='link-title'>Travel</h3>
            <div className='llll'>Destinations</div>
            <div className='llll'>Food & Drink</div>
            <div className='llll'>Stay</div>
            <div className='llll'>News</div>
            <div className='llll'>Videos</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>World</h3>
            <div className='llll'>US Politics</div>
            <div className='llll'>The Biden Presidency</div>
            <div className='llll'>Facts First</div>
            <div className='llll'>2024 Election</div>
          </div>
          <div>
            <h3 className='link-title'>Sports</h3>
            <div className='llll'>Football</div>
            <div className='llll'>Tennis</div>
            <div className='llll'>Golf</div>
            <div className='llll'>Motorsport</div>
            <div className='llll'>US Sports</div>
            <div className='llll'>Olympics</div>
            <div className='llll'>Climbing</div>
            <div className='llll'>Esports</div>
            <div className='llll'>Hockey</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>Business</h3>
            <div className='llll'>Markets</div>
            <div className='llll'>Tech</div>
            <div className='llll'>Media</div>
            <div className='llll'>Calculators</div>
            <div className='llll'>Videos</div>
          </div>
          <div>
            <h3 className='link-title'>Watch</h3>
            <div className='llll'>Live TV</div>
            <div className='llll'>Digital Studios</div>
            <div className='llll'>Golf</div>
            <div className='llll'>CNN Films</div>
            <div className='llll'>HLN</div>
            <div className='llll'>TV Schedule</div>
            <div className='llll'>TV Shows A-Z</div>
            <div className='llll'>CNNVR</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>Health</h3>
            <div className='llll'>Life, But Better</div>
            <div className='llll'>Fitness</div>
            <div className='llll'>Food</div>
            <div className='llll'>Sleep</div>
            <div className='llll'>Mindfulness</div>
            <div className='llll'>Relationships</div>
          </div>
          <div>
            <h3 className='link-title'>Features</h3>
            <div className='llll'>As Equals</div>
            <div className='llll'>Call To Earth</div>
            <div className='llll'>Freedom Project</div>
            <div className='llll'>Impact Your World</div>
            <div className='llll'>Inside Africa</div>
            <div className='llll'>2 Degrees</div>
            <div className='llll'>CNN Heros</div>
            <div className='llll'>All Features</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>Entertainment</h3>
            <div className='llll'>Movies</div>
            <div className='llll'>Television</div>
            <div className='llll'>Celebrity</div>
          </div>
          <div>
            <h3 className='link-title'>Weather</h3>
            <div className='llll'>Climate</div>
            <div className='llll'>Wildfire Tracker</div>
            <div className='llll'>Video</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>Tech</h3>
            <div className='llll'>Innovate</div>
            <div className='llll'>Gadget</div>
            <div className='llll'>Foreseeable Future</div>
            <div className='llll'>Mission: Ahead</div>
            <div className='llll'>Upstarts</div>
            <div className='llll'>Work Transformed</div>
            <div className='llll'>Innovative Cities</div>
          </div>
          <div>
            <h3 className='link-title'>More</h3>
            <div className='llll'>Photos</div>
            <div className='llll'>Longform</div>
            <div className='llll'>Investigations</div>
            <div className='llll'>CNN Profiles</div>
            <div className='llll'>CNN Leadership</div>
            <div className='llll'>CNN Newsletters</div>
            <div className='llll'>Work For CNN</div>
          </div>
        </div>

        <div className='footer-link-1'>
          <div>
            <h3 className='link-title'>Style</h3>
            <div className='llll'>Arts</div>
            <div className='llll'>Design</div>
            <div className='llll'>Fashion</div>
            <div className='llll'>Architecture</div>
            <div className='llll'>Luxury</div>
            <div className='llll'>Beauty</div>
            <div className='llll'>Video</div>
          </div>

        </div>
      </div>

      <div className='footer-down'>
        <div className='footer-down-1'>
          <div className='cnn-div'><img src="/cnn.jpg" alt="cnn-logo" className="" style={{objectFit: 'cover', cursor: 'pointer'}} width={"40px"} height={"40px"}/></div>
          <div className='navs' style={{fontSize: "21px", fontWeight: "700"}}>US</div>
        </div>
          
        <div className='footer-down-2'>
          <div className="foot-navs">Watch</div>
          <div className="foot-navs">Listen</div>
          <div className="foot-navs">Live TV</div>
          <div className='foot-navsss'>|</div>
          <div className="foot-navs" style={{fontWeight: "700"}}>Follow CNN</div>
          <img src="/sm1.png" alt="facebook logo" width={"40px"} height={"40px"} />
          <img src="/sm2.png" alt="facebook logo" width={"45px"} height={"25px"} />
          <img src="/sm3.png" alt="facebook logo" width={"25px"} height={"25px"} />
          <img src="/sm4.png" alt="facebook logo" width={"25px"} height={"25px"} />
          <img src="/sm5.png" alt="facebook logo" width={"25px"} height={"25px"} />
          <div className="log-in">
          Log In
        </div>
        </div>

      </div>
      <div className='footer-down-3'>
        <div className='down-link'>Terms of Use</div>
        <div className='down-link'>Privacy Policy</div>
        <div className='down-link'>Cookie Settings</div>
        <div className='down-link'>Ad Chioces</div>
        <div className='down-link'>Accessibility & CC</div>
        <div className='down-link'>About</div>
        <div className='down-link'>Newsletters</div>
        <div className='down-link'>Transcripts</div>
      </div>
      <div className='down'>
        <div>© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</div>
        <div>CNN Sans ™ & © 2016 Cable News Network.</div>
      </div>
      </>
    </div>
                </>
              )}
            </div>
            </>
          )}
          <Bars3Icon className="bar-icon object-cover cursor-pointer"/>
        </div>
        
        <div className="logo-div w-8 h-8">
          <img src="/cnn.jpg" alt="cnn-logo" className="cnn-logo"/>
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