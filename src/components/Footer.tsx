import '@/components/footer.css'
import useMediaQuery from "@/hooks/useMediaQuery";


const Footer = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");


  return (
   
    <div className='footer'>
      <>
      <h1 className='feature'>In Case You Missed It</h1>
      <div className='foot-1'>
        <div className='foot-1-1'>
          <img src="/img38.jpg" alt="image 38" width={"100%"} className='image-3'/>
          <h1 className='foot-head-1'>The best islands in Europe for getting away from almost everyone</h1>
        </div>
        <div className='foot-1-2'>
        <div className='news-foot'>This warty, toxic pest threatens entire ecosystems. These scientists have a secret weapon</div>
        <div className='news-foot'>This train route is being revived after over 100 years</div>
        <div className='news-foot'>Wayfair lays off 13% of its workforce weeks after telling employees to work harder</div>
        <div className='news-foot'>JetBlue and Spirit appeal court decision blocking their merger</div>
        <div className='news-foot'>‘Frost quakes’ were felt around Chicago this week. Here’s what scientists do and don’t know about the seismic phenomenon</div>
        <div className='news-foot'>Group suspected of killing Dutch crime reporter also wanted to kidnap PM Mark Rutte, witness says</div>
        <div className='news-foot'>Mongolia’s new snow and ice festival sets Guinness World Record</div>
        <div className='news-foot'>Venice entry fee tickets go on sale. Here’s how they work</div>
        <div className='news-foot' style={{border: "none"}}>Cases almost double as CDC expands warning of salmonella infections linked to recalled charcuterie meats</div>
        </div>
      </div>

      <div className='div-input'>
          <input type="text" placeholder='Search CNN...' className='input'/>
      </div>

      <div>
        {isAboveMediumScreens ? (
          <>
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
            <div className="log-in logg">
            Log In
          </div>
          </div>

        </div>
        <div className='footer-down-3'>
          <span className='down-link'>Terms of Use</span>
          <span className='down-link'>Privacy Policy</span>
          <span className='down-link'>Cookie Settings</span>
          <span className='down-link'>Ad Chioces</span>
          <span className='down-link'>Accessibility & CC</span>
          <span className='down-link'>About</span>
          <span className='down-link'>Newsletters</span>
          <span className='down-link'>Transcripts</span>
        </div>
        <div className='down'>
          <div>© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</div>
          <div>CNN Sans ™ & © 2016 Cable News Network.</div>
        </div>
        </>
        ) : (
          <>
          <div className='lower-inside'>
            <div className='lower'>
              <img src="/profile.png" alt="profile logo" width={"30px"} style={{cursor: 'pointer', marginBottom: "10px"}}/>
              <div style={{fontWeight: "700", fontSize: "Larger", cursor: 'pointer'}}>Log In</div>
            </div>
            <div className='lower-2'>
              <div>Live TV</div>
              <div>Listen</div>
              <div>Watch</div>
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
            <div className='lower-4'>
              <img src="/cnn.jpg" alt="cnn-logo" width={"40px"} height={"40px"}/>
              <div className='navs' style={{fontSize: "21px", fontWeight: "700"}}>US</div>
            </div>
            <div className='lower-5'>
              <div>Follow CNN</div>
              <div className='lower-5-1'>
                <img src="/sm1.png" alt="facebook logo" width={"40px"} height={"40px"} />
                <img src="/sm2.png" alt="facebook logo" width={"45px"} height={"25px"} />
                <img src="/sm3.png" alt="facebook logo" width={"25px"} height={"25px"} />
                <img src="/sm4.png" alt="facebook logo" width={"25px"} height={"25px"} />
                <img src="/sm5.png" alt="facebook logo" width={"25px"} height={"25px"} />
              </div>
            </div>
            <div className='lower-6'>
              <span>Terms of Use</span>
              <span>Privacy Policies</span>
              <span>Cookie Settings</span>
              <span>Ad Choices</span>
              <span>Accessibility & CC</span>
              <span>About</span>
              <span>NewsLetters</span>
              <span>Transcripts</span>
            </div>
            <div className='lower-7'>
              <div>© 2024 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</div>
              <div>CNN Sans ™ & © 2016 Cable News Network.</div>
            </div>
          </div>
          </>
        )}
      </div>
      
      </>
    </div>
  )
}

export default Footer