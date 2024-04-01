import {Button, Box, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Divider, Grid, IconButton, Typography } from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
// import Offering from '../Offering/Offering'
import React from 'react'
import style from './Cards.module.scss'
import { useNavigate } from "react-router-dom";

const Cards = ({cover,manager,projectValue,token,annualReturn,cashOnCash,propertyStatus,funded,equity,trendStatus,trendIcon}) => {
  const navigate = useNavigate();
  return (
    <Card className={style.wholeCard} elevation={24}>
    <CssBaseline />
      <CardActionArea className={style.clickable} onClick={() => navigate("/Offering")}>
            <Typography className={`${style.cardTrendText} ${style[`${trendStatus}`]}`}>
              <IconButton className={`${style.cardTrendIcon} ${style[`${trendStatus}`]}`}>
                {trendIcon}
              </IconButton>{trendStatus}
            </Typography>
            <Box className={style.onImageText}>
              <Typography variant='body1' className={style.insideImageHeading}>{propertyStatus}</Typography>
              <Typography variant='h1' className={style.imageMiddleText}>The Madison</Typography>
              <Typography variant='body1' className={style.imageBottomText}>Houston, TX</Typography>
            </Box>
            <Box className={style.overlappingText}>
              <Typography className={style.flexText}>
                <Typography className={style.headingOverlap} component={'span'} >Annual Return </Typography>
                <Typography component={'span'} className={style.returnPercent}>{annualReturn}%</Typography>
              </Typography>
              <Typography className={style.flexText}>
                <Typography className={style.smallText} component={'span'}>Cash on Cash </Typography>
                <Typography component={'span'} className={style.smallTextPercent}>{cashOnCash}%</Typography>
              </Typography>
              <Typography className={style.flexText}>
                <Typography component={'span'} className={style.smallText}>Equity Multiple </Typography>
                <Typography className={style.smallTextPercent} component={'span'}>{equity} x</Typography>
              </Typography>
            </Box>
            <CardMedia
              className={style.coverPhoto}
              component="img"
              image= {cover}
            />
              <CardContent className={style.cardContent}>
                <Grid container className={style.gridWrapper}>
                  <Grid item xs={4} className={style.contentLeft}>
                      <Typography>Multifamily</Typography> 
                      <ApartmentIcon/>
                      <Typography className={style.bigGapTop}>Manager</Typography>
                      <CardMedia
                          className={style.managerLogo}
                          component="img"
                          image= {manager}
                      />
                  </Grid>
                  <Divider orientation="vertical" flexItem className={style.divider}></Divider>

                  <Grid item xs={7} className={style.contentRight}>
                    <Box className={style.flexText}>
                      <Typography className={style.contentRightTopText}>Project Value </Typography>
                      <Typography className={style.boldValue}> ${projectValue}M</Typography>
                    </Box>
                    <Box className={style.flexText}>
                      <Typography className={style.contentRightMiddleText}>Token Price </Typography>
                      <Typography className={style.tokenPrice}> ${token}</Typography>
                    </Box>
                    <Box className={`${style.flexText} ${funded===0 ? style.dontDisplay : ''}`}>
                      <Typography className={style.contentRightBottomText}>Funded</Typography>
                      <Typography className={style.highlightedFundedValue}> {funded}%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
      </CardActionArea>
      <Button className={style.button} onClick={() => navigate("/Offering")}>VIEW DETAILS</Button>
    </Card>
  )
}

export default Cards