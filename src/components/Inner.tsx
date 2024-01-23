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
            <h1 className='heading-1'>'We aren't going anywhere,' Haley campaign says</h1>
            <img src="/img1.jpg" alt="image 1" className='image-1'/>
            <h2 className='heading-2'>Trump and Haley are facing off in the pivotal New Hampshire primary, after Haley spent months focusing her campaign efforts on the state</h2>
            <li><b>Analysis:</b> New Hampshire is a head-to-head matchup of Trump and Haley</li>
            <li>6 things to watch in New Hampshire’s presidential primary</li>
            <li>Democratic presidential candidate: ‘My party is completely delusional right now’</li>
            <li>Federal appeals court lets Trump gag order stand in federal January 6 case</li>
          </div>

          <div className='column-2'>
            <img src="/img2.jpg" alt="image 2" className='image-2' />
            <h1 className='heading-3'>Russia’s ‘meat assaults’ wear Ukraine down</h1>
            <li>Kyiv rejects calls to cede land to Russia by Slovakia’s populist leader</li>
            <li>New video shows Russian tank obliterated in strike</li>
            <img src="/img3.jpg" alt="image 3" className='image-3'/>
            <h1 className='heading-3'>‘Oppenheimer’ leads Oscar contenders with 13 nominations</h1>
            <li>Martin Scorsese and John Williams just made Oscars history</li>
            <li>Stars react to nominations</li>
            <li>Will Netflix’s experimentation pay off?</li>
          </div>

          <div className='column-3'>
            <img src="/live.png" alt="live image"  className='image-3'/>
            <h1 className='heading-4'>Catch up on today’s global news</h1>
            <div className='news'><b style={{color: "red"}}>Live Updates:</b> Israel proposes allowing Hamas senior leaders to leave Gaza</div>
            <div className='news'>24 Israeli soldiers killed in combat in Gaza, military says. Palestinian death toll rises to 25,295 since war began</div>
            <div className='news'>Iran executes protester with mental health condition, judiciary says</div>
            <div className='news'>Why US-supplied howitzers aren’t having an impact on Ukrainian front lines</div>
            <div className='news'>The Doomsday Clock reveals how close we are to total annihilation</div>
            <div className='news'>GOP lawmaker denies criticizing Trump. See his response after Kaitlan Collins plays the video</div>
            <div className='news'>George Santos appears in federal court as trial looms later this year</div>
          </div>
        </div>

        <div className='blog-2'>
          <div className='column-1-1'>
            <h5 className='mini'>MORE TOP STORIES</h5>
            <img src="/img5.jpg" alt="image 5" className="image-3" width={"100%"}/>
            <h2 className='heading-1-1'>The world is a mess and Wall Street isn’t paying attention</h2>
            <div className='news'>Chinese stocks have lost $6 trillion in 3 years. Here’s what you need to know</div>
            <div className='news'>Young girl buried by hand in the sand as Israeli offensive hits Khan Younis</div>
            <div className='news'>United Nations report heavily critical of UK’s ‘increasingly severe crackdowns’ on environmental protesters</div>
            <div className='news'>‘Wow’: CNN anchor reacts to former Trump rivals now endorsing him</div>
            <div className='news'>Amazon tracks its French warehouse workers to the second, regulator finds</div>
          </div>

          <div className='column-2-1'>
            <h5 className='mini'>FEATURED</h5>
            <img src="/img6.jpg" alt="image 6" className="image-3" width={"100%"}/>
            <h2 className='heading-2-1' style={{marginTop: "10px"}}>World’s best city for 2024 revealed</h2>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img7.jpg" alt="image 7" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>More flowers are ‘selfing,’ scientists say. That could spell trouble for other species</div>
            </div>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img8.jpg" alt="image 8" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>These Japanese beef croquettes are so popular there’s a 43-year waitlist</div>
            </div>
          </div>
          
          <div className='column-3-1'>
            <img src="img4.jpg" alt="image" width={"100%"} style={{margin: "50px 0px"}}/>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img9.jpg" alt="image 9" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Navigating ‘male menopause’ for a healthier life</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img10.jpg" alt="image 10" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Billy Joel is releasing his first single in 17 years</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img11.jpg" alt="image 11" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Novak Djokovic defeats Taylor Fritz to reach 11th Australian Open semifinal</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img12.jpeg" alt="image 12" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Fire truck spins out of control on icy road. See what happens next</div>
            </div>
          </div>
        </div>

        <div className='blog-3'>
          <div className='column-1-1'>
              <img src="/img13.jpg" alt="image 13" className="image-3" width={"100%"}/>
              <h2 className='heading-1-1'>British zoo has new plan to rehabilitate its potty-mouthed parrots</h2>
              <div className='semi-column-1'>
                <div style={{objectFit: "cover"}}><img src="/img16.jpg" alt="image 16" className="image-3" width={"100%"} height={"70px"}/></div>
                <div className='semi-1' style={{width: "80%"}}>Three dead as 7.1 earthquake strikes near China’s border with Kyrgyzstan</div>
              </div>
              <div className='semi-column-1'>
                <div style={{objectFit: "cover"}}><img src="/img17.jpg" alt="image 17" className='image-3' width={"100%"} height={"70px"}/></div>
                <div className='semi-1' style={{width: "80%"}}>Pope Francis takes on vested interests to speak out on humanitarian crises</div>
              </div>
              <div className='semi-column-1'>
                <div style={{objectFit: "cover"}}><img src="/img18.jpg" alt="image 18" className='image-3' width={"100%"} height={"70px"}/></div>
                <div className='semi-1' style={{width: "80%"}}>Gigi Riva, Italy’s all-time leading scorer, dies aged 79</div>
              </div>
            </div>

          <div className='column-2-1'>
            <img src="/img14.jpg" alt="image 14" className="image-3" width={"100%"}/>
            <h2 className='heading-2-1' style={{marginTop: "10px"}}>Cowboys, college grads and comfy shoes: What we saw at the men’s shows in Paris</h2>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img19.jpg" alt="image 19" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>This US couple bought a home in the ‘forgotten region’ of Italy. Here’s what happened next</div>
            </div>
            <div className='semi-column'>
              <div style={{objectFit: "cover"}}><img src="/img20.jpg" alt="image 20" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1'>See vintage photos of a long-forgotten Ghana</div>
            </div>
          </div>

          <div className='column-1-1'>
            <img src="/img15.jpg" alt="image 15" className="image-3" width={"100%"}/>
            <h2 className='heading-1-1'>Man arrested again outside Taylor Swift’s townhouse less than 48 hours after prior arrest there</h2>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img21.jpg" alt="image 21" className="image-3" width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Female golfers take part in The Match for the first time in historic edition</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img22.jpg" alt="image 22" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>Italian soccer team Udinese to play match behind closed doors after alleged racist abuse from fans</div>
            </div>
            <div className='semi-column-1'>
              <div style={{objectFit: "cover"}}><img src="/img23.jpg" alt="image 23" className='image-3' width={"100%"} height={"70px"}/></div>
              <div className='semi-1' style={{width: "80%"}}>‘Has to be a prank’: See how family wound up with 200 McNuggets</div>
            </div>
          </div>
        </div>

        <h1 className='feature'>Featured Sections</h1>
        <div className='blog-4'>
          <div className='column-3-1'>
            <h5 className='mini'>CNN BUSINESS</h5>
            <img src="/img24.jpg" alt="image 24" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>Sports Illustrated’s publisher lays off most of its staff, union says</h2>
            <div className='news' style={{fontSize: "18px"}}>Applebee’s is offering a subscription pass for your date nights</div>
            <div className='news' style={{fontSize: "18px"}}>Inflation isn’t beaten yet and risks of a new price shock are rising</div>
            <div className='news' style={{fontSize: "18px"}}>Harvard submits plagiarism investigation documents to Congress</div>
            <div className='news' style={{fontSize: "18px"}}>Microsoft says state-sponsored Russian hacking group accessed email accounts of senior leaders</div>
            
          </div>

          <div className='column-3-2'>
            <h5 className='mini'>CNN TRAVEL</h5>
            <img src="/img25.jpg" alt="image 25" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>How the three-year cruise fell apart</h2>
            <div className='news' style={{fontSize: "18px"}}>Airfare hasn’t been this cheap since 2009</div>
            <div className='news' style={{fontSize: "18px"}}>‘Anything can happen.’ Inside the ‘real life reality show’ of the nine-month cruise</div>
            <div className='news' style={{fontSize: "18px"}}>Last letters from young kamikaze pilots provide rare insights into Japan’s feared special attack unit</div>
            <div className='news' style={{fontSize: "18px"}}>Where to go in 2024: The best places to visit</div>

          </div>

          <div className='column-3-3'>
            <img src="/ad.gif" alt="advert" width={"100%"} style={{cursor: "pointer"}}/>
          </div>
        </div>

        <div className='blog-5' style={{marginTop: "-40px"}}>
        <div className='column-3-1'>
            <h5 className='mini'>SPORT</h5>
            <img src="/img26.jpg" alt="image 26" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>Amateur golfer Nick Dunlap withdraws from upcoming tournament after ‘life changing’ PGA Tour win</h2>
            <div className='news' style={{fontSize: "18px"}}>AFCON: Egypt reaches knockout stages after wild finale as Ghana crumbles</div>
            <div className='news' style={{fontSize: "18px"}}>Italian soccer team Udinese to play match behind closed doors after alleged racist abuse from fans</div>
            <div className='news' style={{fontSize: "18px"}}>Injured soccer star may face exhausting round-trip to win his first international title</div>
            <div className='news' style={{fontSize: "18px"}}>Getting a foothold in the NFL is almost impossible – even if you’re a professional athlete</div>
            
          </div>

          <div className='column-3-1'>
            <h5 className='mini'>STYLE</h5>
            <img src="/img27.jpg" alt="image 27" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>Emma Stone is selling her charming LA bungalow for $4 million</h2>
            <div className='news' style={{fontSize: "18px"}}>This infamous ’90s hairstyle is back on trend</div>
            <div className='news' style={{fontSize: "18px"}}>The winner of a prestigious Japanese literary award has confirmed AI helped write her book</div>
            <div className='news' style={{fontSize: "18px"}}>2,000-year-old beach house discovered during building work</div>
            <div className='news' style={{fontSize: "18px"}}>Why Calvin Klein ads still get people talking</div>
            <div className='news' style={{fontSize: "18px"}}>The secret life of Balenciaga</div>
            
          </div>

          <div className='column-3-1'>
            <h5 className='mini'>OPINION</h5>
            <img src="/img28.jpg" alt="image 28" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>What the West gets wrong on Stalin and Putin</h2>
            <div className='news' style={{fontSize: "18px"}}>Germany’s far right is surging. Banning it would backfire</div>
            <div className='news' style={{fontSize: "18px"}}>‘Origin’ brilliantly exposes America’s caste system. Here’s how we tear it down</div>
            <div className='news' style={{fontSize: "18px"}}>Teen obsession with skin care products isn’t a trend, it’s a warning sign</div>
            <div className='news' style={{fontSize: "18px"}}>Trump is a cultural phenomenon too</div> 
          </div>
        </div>

        <div className='blog-6'>
        <div className='column-3-1'>
            <h5 className='mini'>US POLITICS</h5>
            <img src="/img29.jpg" alt="image 29" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>Haley to air New Hampshire ad with mother of student who died after North Korea detention</h2>
            <div className='news' style={{fontSize: "18px"}}>Republicans worry that turmoil plaguing state parties could hurt GOP up and down the ballot in 2024</div>
            <div className='news' style={{fontSize: "18px"}}>Georgia prosecutor on Trump case paid for trips with District Attorney Willis on his credit card, court filing shows</div>
            <div className='news' style={{fontSize: "18px"}}>Louisiana lawmakers approve a congressional map with a second Black-majority district</div>
            
          </div>

          <div className='column-3-1'>
            <h5 className='mini'>SCIENCE AND HEALTH</h5>
            <img src="/img30.jpg" alt="image 30" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>This is the greatest risk factor of death in people with obesity, according to a new study</h2>
            <div className='news' style={{fontSize: "18px"}}>Superbug crisis threatens to kill 10 million per year by 2050. Scientists may have a solution</div>
            <div className='news' style={{fontSize: "18px"}}>Megalodons were skinnier than we previously thought, new study suggests</div>
            <div className='news' style={{fontSize: "18px"}}>14,000-year-old tusk offers clues about the relationship between early Alaskans and mammoths</div>
            <div className='news' style={{fontSize: "18px"}}>‘Frost quakes’ were felt around Chicago recently. Here’s what scientists know about the phenomenon</div>
            
          </div>

          <div className='column-3-1'>
            <h5 className='mini'>TECH</h5>
            <img src="/img31.jpg" alt="image 31" width={"100%"} className='image-3'/>
            <h2 className='heading-1-1'>Children targeted with sexually explicit photos on Facebook and Instagram, lawsuit claims</h2>
            <div className='news' style={{fontSize: "18px"}}>TSMC says its $40 billion chip project in Arizona faces a further delay</div>
            <div className='news' style={{fontSize: "18px"}}>Cable companies are replacing ancient cable boxes with these tiny new gadgets</div>
            <div className='news' style={{fontSize: "18px"}}>‘Can we sleep at night?’: Renowned tech journalist explains why he pulled his newsletter publication from X and Substack</div>
          </div>
        </div>

        <h1 className='feature'>Photos You Should See</h1>
        <div className='blog-7'>
          <div className='colo'>
            <div className='colo-1'>
              <img src="/img32.jpg" alt="image 32" width={"100%"} className='image-3'/>
              <div className='semi-colo'>Luxury watchmaker is creating a 450 meter-tall residential clocktower</div>
            </div>
            <div className='colo-1'>
              <img src="/img35.jpg" alt="image 35" width={"100%"} className='image-3'/>
              <div className='semi-colo'>Award-winning close-up photos show the hidden wonders of nature</div>
            </div>
          </div>

          <div className='colo'>
            <div className='colo-1'>
              <img src="/img33.jpg" alt="image 33" width={"100%"} className='image-3'/>
              <div className='semi-colo'>Inside Michael Jordan’s slice of paradise</div>
            </div>
            <div className='colo-1'>
              <img src="/img36.jpg" alt="image 36" width={"100%"} className='image-3'/>
              <div className='semi-colo'>Six bull sharks made their home on a golf course. Then they vanished</div>
            </div>
          </div>

          <div className='colo'>
            <div className='colo-1'>
              <img src="/img34.jpg" alt="image 34" width={"100%"} className='image-3'/>
              <div className='semi-colo'>Train surrounded by lions and elephants becomes luxury hotel</div>
            </div>
            <div className='colo-1'>
              <img src="/img37.jpg" alt="image 37" width={"100%"} className='image-3'/>
              <div className='semi-colo'>The world’s most extreme golf courses</div>
            </div>
          </div>
          
          <div>
            <img src="/konga.png" alt="konga image" width={"100%"} style={{marginTop: "20px", cursor: "pointer"}}/>
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