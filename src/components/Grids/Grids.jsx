import React from 'react'
import Cards from '../Cards/Cards'
import style from './Grids.module.scss'
import { Grid } from '@mui/material'
import NavbarLogin from '../NavbarLogin/NavbarLogin'
import { Whatshot,NewReleases, LocalOffer } from '@mui/icons-material'

const Grids = () => {
  return (
    <>
      {/* <div>
        <NavbarLogin showRemainingNavbarAfterSignin={true} />
      </div>{" "} */}
      <br />
      <br />
      <br />
      <Grid container className={style.gridWrapper}>
        <Grid item xs={12} sm={6} md={4} lg={4} className={style.gridItem}>
          <Cards
            manager="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
            cover="https://cdngeneral.rentcafe.com/dmslivecafe/2/31151/Property_Entrance_Sign_2(2).jpg"
            trendStatus="trending"
            trendIcon=<Whatshot />
            propertyStatus="Open for Investment"
            annualReturn={14.9}
            cashOnCash={4.3}
            equity={1.6}
            projectValue={32}
            token={1000}
            funded={100}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} className={style.gridItem}>
          <Cards
            manager="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000"
            cover="https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg"
            trendStatus="new"
            trendIcon=<NewReleases />
            propertyStatus="Open for Investment"
            annualReturn={16.8}
            cashOnCash={4.2}
            equity={1.5}
            projectValue={26}
            token={1000}
            funded={0}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} className={style.gridItem}>
          <Cards
            manager="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/02/Screen-Shot-2020-02-10-at-11.28.00-AM.png"
            cover="https://springsapartmenthomes.pk/wp-content/uploads/2021/09/Aerial-View-New.jpg"
            trendStatus="sold-out"
            trendIcon=<LocalOffer />
            propertyStatus="Completed"
            annualReturn={18.9}
            cashOnCash={4.8}
            equity={8.8}
            projectValue={32}
            token={1888}
            funded={0}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default Grids