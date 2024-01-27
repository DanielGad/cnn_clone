import useMediaQuery from "@/hooks/useMediaQuery";


const Menu = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");

 

  return (
    <div className="menu-ham">
      <>
      {isAboveMediumScreens ? (
        <>
        <div className='div-input' style={{marginTop: "10px"}}>
          <input type="text" placeholder='Search CNN...' className='input'/>
        </div>
      <div className="footer-link-0">
        <div style={{fontWeight: "700", fontSize: "large"}}>Edition</div>
        <div className="fff">US</div>
        <div className="fff">International</div>
        <div className="fff">Arabic</div>
        <div className="fff">Espanol</div>
        <div></div>
        <div></div>
      </div>
      <div className='footer-link'>
        <div className='footer-link-1'>
            <div>
              <div className='link-title'>World</div>
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
              <div className='link-title'>Travel</div>
              <div className='llll'>Destinations</div>
              <div className='llll'>Food & Drink</div>
              <div className='llll'>Stay</div>
              <div className='llll'>News</div>
              <div className='llll'>Videos</div>
            </div>
          </div>

          <div className='footer-link-1'>
            <div>
              <div className='link-title'>US Politics</div>
              <div className='llll'>US Politics</div>
              <div className='llll'>The Biden Presidency</div>
              <div className='llll'>Facts First</div>
              <div className='llll'>2024 Election</div>
            </div>
            <div>
              <div className='link-title'>Sports</div>
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
              <div className='link-title'>Business</div>
              <div className='llll'>Markets</div>
              <div className='llll'>Tech</div>
              <div className='llll'>Media</div>
              <div className='llll'>Calculators</div>
              <div className='llll'>Videos</div>
            </div>
            <div>
              <div className='link-title'>Watch</div>
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
              <div className='link-title'>Health</div>
              <div className='llll'>Life, But Better</div>
              <div className='llll'>Fitness</div>
              <div className='llll'>Food</div>
              <div className='llll'>Sleep</div>
              <div className='llll'>Mindfulness</div>
              <div className='llll'>Relationships</div>
            </div>
            <div>
              <div className='link-title'>Features</div>
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
              <div className='link-title'>Entertainment</div>
              <div className='llll'>Movies</div>
              <div className='llll'>Television</div>
              <div className='llll'>Celebrity</div>
            </div>
            <div>
              <div className='link-title'>Weather</div>
              <div className='llll'>Climate</div>
              <div className='llll'>Wildfire Tracker</div>
              <div className='llll'>Video</div>
            </div>
          </div>

          <div className='footer-link-1'>
            <div>
              <div className='link-title'>Tech</div>
              <div className='llll'>Innovate</div>
              <div className='llll'>Gadget</div>
              <div className='llll'>Foreseeable Future</div>
              <div className='llll'>Mission: Ahead</div>
              <div className='llll'>Upstarts</div>
              <div className='llll'>Work Transformed</div>
              <div className='llll'>Innovative Cities</div>
            </div>
            <div>
              <div className='link-title'>More</div>
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
              <div className='link-title'>Style</div>
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
        <div className="footer-social">
          <span style={{fontWeight: "700"}}>Follow CNN</span>
              <img src="/sm1.png" alt="facebook logo" width={"40px"} height={"40px"} />
              <img src="/sm2.png" alt="facebook logo" width={"45px"} height={"25px"} />
              <img src="/sm3.png" alt="facebook logo" width={"25px"} height={"25px"} />
              <img src="/sm4.png" alt="facebook logo" width={"25px"} height={"25px"} />
              <img src="/sm5.png" alt="facebook logo" width={"25px"} height={"25px"} />
        </div>
        </>
      ) : (
        <>
        <div className='div-input' style={{marginTop: "10px"}}>
          <input type="text" placeholder='Search CNN...' className='input'/>
        </div>
        <div className="edition">
          Edition
        </div>
        <div className='lower-3'>
              <div>World</div>
              <div>Politics</div>
              <div>Business</div>
              <div>Health</div>
              <div>Entertainment</div>
              <div>Tech</div>
              <div>Style</div>
              <div>Travel</div>
              <div>Sports</div>
              <div>Watch</div>
              <div>Features</div>
              <div>Weather</div>
              <div>More</div>
            </div>
            <div className='lower-5'>
              <div style={{textAlign: "center"}}>Follow CNN</div>
              <div className='lower-5-1'>
                <img src="/sm1.png" alt="facebook logo" width={"40px"} height={"40px"} />
                <img src="/sm2.png" alt="facebook logo" width={"45px"} height={"25px"} />
                <img src="/sm3.png" alt="facebook logo" width={"25px"} height={"25px"} />
                <img src="/sm4.png" alt="facebook logo" width={"25px"} height={"25px"} />
                <img src="/sm5.png" alt="facebook logo" width={"25px"} height={"25px"} />
              </div>
            </div>
        </>
      )}
      </>
    </div>
  )
}

export default Menu