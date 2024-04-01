import React from 'react'
import { Typography, Box, Button} from '@mui/material'
import Style from './Offering.module.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavbarLogin from '../NavbarLogin/NavbarLogin';
import Accordion from '../Accordian/Accordian.jsx';
function Offering() {
  return (
    <>
      <div>
      <NavbarLogin showRemainingNavbarAfterSignin ={true} />
      </div>{" "}
      <Box className={Style.body}>
        <Box className={Style.content}>
          {/* offerpage */}
          <Box className={Style.offerpage}>
            {/* header description */}
            <Box className={Style.preheader}>
              <nav className={Style.navbar}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link className={Style.link} underline="hover" color="inherit" href="/">                    
                    Marketplace
                  </Link>
                  <Link className={Style.link}
                    underline="hover"
                    color="inherit"
                    >
                    The Madisons
                  </Link>
                </Breadcrumbs>
              </nav>
            </Box>
            {/* title */}
            <Box className={Style.titlediv}>
              <Box className={Style.title}> The Madison
              </Box>
              <Box>
                <img className={Style.titleicon}
                  src="data:image/png;base64,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" 
                  alt="">
                </img>
              </Box>
            </Box>
            {/* videobox */}
            <Box className={Style.offercontent}>
              <Box className={Style.offervideo}>
                <Box className={Style.videosize}>
                  <iframe className={Style.videopadding}
                    alt="The house from the offer."
                    src="https://www.youtube.com/embed/ONCXtADQvWI?autoplay=1&mute=1&controls=1&origin=https%3A%2F%2Finvest.honeybricks.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"
                    >
                  </iframe>
                </Box>
                <Box className={Style.videodetail}>
                  <Box className={Style.videobox}>
                    <Box className={Style.videodescription}>
                      <img className={Style.videoicon}
                        src="https://invest.honeybricks.com/app/static/media/location.0cf78436fb97ccd76456de8630512815.svg"
                        alt="">
                      </img>
                      <Box className={Style.videotext}>
                        North Ogden, UT
                      </Box>
                    </Box>
                  </Box>
                  <Box className={Style.border}>
                  </Box>
                  <Box className={Style.videobox}>
                    <Box className={Style.videodescription}>
                      <img className={Style.videoicon}
                        src="https://invest.honeybricks.com/app/static/media/property.af97545de268792f07cd55ba0c33bee7.svg" alt="reload">
                      </img>
                      <Box className={Style.videotext}>
                        Inter City
                      </Box>
                    </Box>
                  </Box>
                  <Box className={Style.border}>
                  </Box>
                  <Box className={`${Style.videobox} ${Style.none}`}>
                    <Box className={Style.videodescription}>
                      <img className={Style.videoicon}
                        src="https://invest.honeybricks.com/app/static/media/property.af97545de268792f07cd55ba0c33bee7.svg" alt="reload">
                      </img>
                      <Box className={Style.videotext}>
                        Transportation
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* summary */}
              <Box className={Style.summary}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>Summary</Box>
                  <Button className={Style.button}>
                    <img className={Style.icon}
                      src="https://invest.honeybricks.com/app/static/media/file_download.f4ac36055074411deab1459fe4bbddc3.svg" alt="reload">
                    </img>
                    <Box className={Style.text}>offering Memorandum</Box>
                    <span className={Style.span}></span>
                  </Button>
                </Box>
                <Box className={Style.description}>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>
                      The Ranches is a 79-home, townhome community, built in 2018 and located in Ogden, a dynamic suburb 40 minutes north of Salt Lake City.
                    </Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Salt Lake City has been among the nation’s top growing metro areas since the early 2000’s, and Ogden offers residents a beautiful setting with close proximity to world class outdoor recreations as well as a growing job market and retail amenities. The area attracts many families and young professionals and has benefitted from the increased value placed on lifestyle and the shift towards work-from-anywhere culture.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Within Ogden, The Ranches offers a high quality, spacious experience set on nearly 6 acres of land, with homes averaging 1,245 square feet. The large, 2-story, floor plans and direct access garages position the property as a very strong value alternative to home ownership, which is 32% more expensive than post-business plan rents for The Ranches. Additionally, the property offers a gym, playground, dog park and communal spaces.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>The Ranches’ homes are currently 96% occupied and recent leasing has been nearly 14% above in-place rents. This strong recent performance coupled with Ogden’s vitality support Orion Real Estate Partner’s light value-add strategy.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Orion has been awarded an additional 87 units representing Phase II of The Ranches, with construction scheduled to complete by November 2022. Orion is exploring options for funding this acquisition, as well as a still-hypothetical Phase III, including the potential for additional allocation to HoneyBricks investors. These phases are seen as a positive with regards to operational efficiencies and disposition value as the larger unit count will increase the appeal of the asset to institutional investors.</Typography>
                  </Box>
                </Box>
              </Box>
              {/* Webinar */}
              <Box className={Style.webinar}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Watch the webinar
                  </Box>
                </Box>
                <Box className={Style.description}>
                  <Box className={Style.paragraph}>
                    <Box className={Style.iconDiv}>
                      <img className={Style.icon} src="https://invest.honeybricks.com/app/webinar/video_player.png" alt ="reload">
                      </img>
                    </Box>
                    <Box className={Style.p}>
                    View a replay of our webinar with Orion Real Estate Partners Real Estate Partners about the offering at The Ranches.
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* key investment Highlights */}
              <Box className={Style.investment}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Key Investment Highlights
                  </Box>
                </Box>
                <Box className={Style.description}>
                 <Box className={Style.paragraph}>
                    <Box className={Style.iconDiv}>
                      <img className={Style.icon} src="https://hb-prod-data-public.s3.us-west-2.amazonaws.com/web/icons/house-icon.svg" alt ="reload">
                      </img>
                    </Box>
                    <Box className={Style.p}>
                      <Typography className={Style.paraHead} variant="h5">A Thriving Location</Typography>
                      Ogden has projected 5-year double digit job and wage growth of 10.6% and 12.5%, respectively. The population is also projected to grow at 12% over the next 5 years, far outpacing the national growth projection of 4%. Ogden’s attractive job market, affordable cost of living and access to outdoor recreation has resulted in Ogden seeing an influx of young professionals.
                    </Box>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Box className={Style.iconDiv}>
                      <img className={Style.icon} src="https://hb-prod-data-public.s3.us-west-2.amazonaws.com/web/icons/chart-up.svg" alt ="reload">
                      </img>
                    </Box>
                    <Box className={Style.p}>
                      <Typography className={Style.paraHead} variant="h5">Rent Growth</Typography>
                      The value add business plan will invest a total of $974,000 in the property, pushing rents to $1,950. Recent leasing is supportive of this plan with unrenovated rents averaging $1,889 (+13.6% vs in-place).
                    </Box>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Box className={Style.iconDiv}>
                      <img className={Style.icon} src="https://hb-prod-data-public.s3.us-west-2.amazonaws.com/web/icons/people-icon.svg" alt ="reload">
                      </img>
                    </Box>
                    <Box className={Style.p}>
                      <Typography className={Style.paraHead} variant="h5">Low Interest Rate Risk</Typography>
                      A combination of appealing location, new vintage, moderate capital plan risk and strong recent leasing is further enhanced by a favorable debt strategy, with the Sponsor securing a 4.36% (5 years interest-only) loan.                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Managemnet */}
              <Box className={Style.summary}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Management
                  </Box>
                </Box>
                <Box className={Style.description}>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>
                      The Ranches is a 79-home, townhome community, built in 2018 and located in Ogden, a dynamic suburb 40 minutes north of Salt Lake City.
                    </Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Salt Lake City has been among the nation’s top growing metro areas since the early 2000’s, and Ogden offers residents a beautiful setting with close proximity to world class outdoor recreations as well as a growing job market and retail amenities. The area attracts many families and young professionals and has benefitted from the increased value placed on lifestyle and the shift towards work-from-anywhere culture.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Within Ogden, The Ranches offers a high quality, spacious experience set on nearly 6 acres of land, with homes averaging 1,245 square feet. The large, 2-story, floor plans and direct access garages position the property as a very strong value alternative to home ownership, which is 32% more expensive than post-business plan rents for The Ranches. Additionally, the property offers a gym, playground, dog park and communal spaces.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>The Ranches’ homes are currently 96% occupied and recent leasing has been nearly 14% above in-place rents. This strong recent performance coupled with Ogden’s vitality support Orion Real Estate Partner’s light value-add strategy.</Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>Orion has been awarded an additional 87 units representing Phase II of The Ranches, with construction scheduled to complete by November 2022. Orion is exploring options for funding this acquisition, as well as a still-hypothetical Phase III, including the potential for additional allocation to HoneyBricks investors. These phases are seen as a positive with regards to operational efficiencies and disposition value as the larger unit count will increase the appeal of the asset to institutional investors.</Typography>
                  </Box>
                </Box>
              </Box>
              {/* Buisness plan */}
              <Box className={Style.summary}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Buisness Plan
                  </Box>
                </Box>
                <Box className={Style.description}>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>
                      Orion plans to spend $6,000 per unit across 100% of the units to deliver higher quality kitchen finishes to the tenant base and increase rents to $1,950, in line with comparable properties in the submarket.
                    </Typography>
                  </Box>
                  <Box className={Style.paragraph}>
                    <Typography className={Style.p}>
                      Additionally, $4,000 per unit will be spent on exterior and common area upgrades.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Location */}
              <Box className={Style.map}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Location
                  </Box>
                </Box>
                <Box className={Style.mapSize}>
                  <Box className={Style.mapPadding}
                    component="img"
                    alt="Google Map."
                    src="https://oobrien.com/wordpress/wp-content/uploads/2016/07/googlemaps_july2016.jpg"
                    />
                </Box>
              </Box>
              {/* //Documents */}
              <Box className={Style.documents}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Documents
                  </Box>
                </Box>
                <Box className={Style.verifyDiv}>
                  <Box className={Style.heading}>
                    <Typography variant="body1" className={Style.header}>
                        Document
                    </Typography>
                    <Typography variant="body1" className={Style.header}>
                        Date
                    </Typography>
                    <Typography variant="body1" className={Style.header}>
                        Document Type
                    </Typography>
                  </Box>
                  <Box className={Style.content}>
                    <Typography variant="body1" className={Style.p}>
                      Verify your account to view the investment documents
                    </Typography>
                    <Button className={Style.button}>
                      verify now
                    </Button>
                  </Box>
                </Box>
              </Box>
               {/* //Disclaimers */}
               <Box className={Style.map}>
                <Box className={Style.heading}>
                  <Box className={Style.text}>
                    Disclaimers
                  </Box>
                </Box>
                <Box>
                  <Accordion/>
                  <Box>
                  <Typography className={Style.desc} variant='h6'>
                     For additional information on risks and disclosures visit   <Link className={Style.link}>Honey Bricks</Link>                 </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Tokenomics */}
          <Box className={Style.tokenomics}>
            <Box className={Style.header}>
              <Box className={Style.firstHeading}>The Madison</Box>
              <Box className={Style.subHeading}>Tokenomics</Box>
            </Box>
            <Box className={Style.details}>
              <Box className={Style.annualReturn}>
                <Typography variant="body1" className={Style.text1}>
                  Annual Return
                </Typography>
                <Typography variant="body1" className={Style.text2}>
                  16.8%
                </Typography>
              </Box>
              <Box className={Style.cashOn}>
                <Typography variant="body1" className={Style.t1}>
                  Cash on Cash
                </Typography>
                <Typography variant="body1" className={Style.t2}>
                  4.2%
                </Typography>
              </Box> 
              <Box className={Style.cashOn}>
                <Typography variant="body1" className={Style.t1}>
                  Equity Multiple
                </Typography>
                <Typography variant="body1" className={Style.t2}>
                  1.5 X
                </Typography>
              </Box> 
              <Box className={Style.cashOn}>
                <Typography variant="body1" className={Style.t1}>
                  Token Price
                </Typography>
                <Typography variant="body1" className={Style.t2}>
                  $1K
                </Typography>
              </Box> 
              <Box className={Style.cashOn}>
                <Typography variant="body1" className={Style.t1}>
                  Total Token
                </Typography>
                <Typography variant="body1" className={Style.t2}>
                  500
                </Typography>
              </Box> 
              <Box className={Style.cashOn}>
                <Typography variant="body1" className={Style.t1}>
                  Tokenized Equity
                </Typography>
                <Typography variant="body1" className={Style.t2}>
                  $500K
                </Typography>
              </Box> 
              <Box className={Style.funded}>
                <Box className={Style.textDiv}>
                  <Typography variant='body1' className={Style.text}>Funded</Typography>
                </Box>
                <Box className={Style.round}>
                  <Box className={Style.smallRound}></Box>
                  <Box className={Style.roundText}>14%</Box>
                </Box>
              </Box>
            </Box>
            <Box className={Style.invest}>
              <Button className={Style.button}>
                + invest
                <span className={Style.span}></span>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default Offering
