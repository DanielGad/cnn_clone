import '@/components/inner.css';
import useMediaQuery from '@/hooks/useMediaQuery';


const Inner = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 959px)");
  return (
    <div>
      
      {isAboveMediumScreens ? (
        <>
        <div className='link'>
        <span className="blogs">Israel-Hamas war </span> <span className="or-sym"> <tbody></tbody> | <tbody></tbody></span> <span className="blogs">Donald Trump</span> <span className="or-sym"><tbody></tbody> | <tbody></tbody></span> <span className="blogs">North Korean's Kim</span> <span className="or-sym"><tbody></tbody> | <tbody></tbody></span> <span className="blogs">Climate 'new denial'</span> <span className="or-sym"><tbody></tbody> | <tbody></tbody></span> <span className="blogs">Netflix remove Indian movie</span> <span className='or-sym'> <tbody></tbody> |  <tbody></tbody></span> <span className="blogs">Phillipines' jeepneys</span> <span className="or-sym"><tbody></tbody> | <tbody></tbody></span> <span className="blogs"><tbody></tbody>2023 Emmy Awards</span> <span className="or-sym"><tbody></tbody> | <tbody></tbody></span> <span className="blogs">Australian Open</span>
      </div>
      
      <div className='blog'>
        <div className='blog-1'>
          <div className='column-1'>
            <h1 className='heading-1'>Why these Iowa Haley backers would vote for Trump in November</h1>
            <img src="/img1.jpeg" alt="image 1" className='image-1'/>
            <h2 className='heading-2'>A CNN project is tracking the 2024 campaign through the eyes of voters in key places. Despite being disappointed by his big Iowa win, these women would now prefer him over Biden</h2>
            <li><b>Analysis:</b> Trump’s Iowa win shows the current GOP is entirely his</li>
            <li>Trump’s new message to his rivals and other takeaways from the Iowa caucuses</li>
            <li>Local reporter reveals which candidate has ‘promise’ in New Hampshire</li>
            <li><b>Opinion:</b> How backers of Trump’s rivals see his Iowa win</li>
            <li>‘Forgive me for editorializing’: John King reacts to ballot counting footage</li>
          </div>

          <div className='column-2'>
            <img src="/img2.jpg" alt="image 2" className='image-2' />
            <h1 className='heading-3'>Fujitsu says it’s ‘truly sorry’ and will compensate UK postal workers whose lives were ruined by its software</h1>
            <img src="/img3.jpg" alt="image 3" className='image-3'/>
            <h1 className='heading-3'>Israel’s withdrawal of some troops from Gaza sparks new government rift</h1>
            <li><b style={{color: "red"}}>Live Updates:</b> Israel looks to the next stage of its war on Hamas</li>
            <li>Hundreds of thousands are starving in Gaza as famine arrives at ‘incredible speed,’ UN aid chief warns</li>
            <li>Iran launches missile strikes in northern Iraq and Syria, claims to destroy Israeli spy base</li>
          </div>

          <div className='column-3'>
            <img src="/img4.jpg" alt="image 4"  className='image-4'/>
            <h1 className='heading-4'>Catch up on today’s global news</h1>
            <div className='news'>Bill Gates explains how AI will change our lives in 5 years</div>
            <div className='news'><b style={{color: "red"}}>Live Updates:</b> Jury selected for Trump’s trial in the E. Jean Carroll defamation case</div>
            <div className='news'>Chinese scientists create cloned monkey</div>
            <div className='news'>US carries out additional strikes against Houthis in Yemen</div>
            <div className='news'>An alarming wave of climate misinformation is spreading on YouTube</div>
            <div className='news'>Historian: Russia can’t beat Ukraine conventionally, so they are doing this</div>
            <div className='news'>The rich and powerful are meeting in Davos. Here’s what they’re talking about</div>
            <div className='news'>New York’s top court upholds gag order against Trump in civil fraud trial</div>
          </div>
        </div>

        <div className='blog-2'>
          <div className='column-1-1'>
            <h5 className='mini'>MORE TOP STORIES</h5>
            <img src="/img5.jpg" alt="image 5" className="image-3" width={"100%"}/>
            <h2 className='heading-1-1'>Tennis star Zverev to face trial over physical abuse allegation</h2>
            <div className='news'>Elon Musk demands another huge payday from Tesla</div>
            <div className='news'>ER staff ‘flabbergasted’ over how doctor called it quits</div>
            <div className='news'>Venice entry fee tickets go on sale. Here’s how they work</div>
            <div className='news'>UK government approves $2.5B project for ‘carbon negative’ power plant</div>
            <div className='news'>Putin’s war must not become ‘frozen,’ Zelensky warns amid weaponry and aid shortages</div>
            <div className='news'>China’s economy grew by about 5.2% in 2023, Premier Li says</div>
          </div>

          <div className='column-2-1'>
            <h5 className='mini'>FEATURED</h5>
            <img src="/img6.jpg" alt="image 6" className="image-3" width={"100%"}/>
            <h2 className='heading-2-1' style={{marginTop: "10px"}}>This US woman moved to Portugal for a better life but says some things are frustrating</h2>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img7.jpg" alt="image 7" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>Weight gain in kids and adults linked to 100% fruit juice: study</div>
            </div>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img8.jpg" alt="image 8" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>Why this actor’s red carpet looks keep us coming back for more</div>
            </div>
          </div>
          
          <div className='column-3-1'>
            <img src="img4.jpg" alt="image" width={"100%"} style={{margin: "50px 0px"}}/>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img9.jpg" alt="image 9" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>The 75 most impactful TV moments are debuts, farewells and historic firsts</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img10.jpg" alt="image 10" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>How a baby in a cute mini tuxedo stole the show at FIFA’s Best Awards</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img11.jpg" alt="image 11" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Watch Buffalo Bills fan slide down stadium stairs</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img12.jpg" alt="image 12" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>AS Roma sacks Jose Mourinho and appoints club legend Daniele De Rossi</div>
            </div>
          </div>
        </div>
      </div>
      </>
      ) : (
        ""
      )}
      
    </div>
  )
}

export default Inner