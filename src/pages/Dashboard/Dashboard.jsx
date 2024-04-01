import React, { useState } from 'react'
import DashboardTable from '../../components/DashboardTable/DashboardTable'
import style from './Dashboard.module.scss'
import PieChartWithPaddingAngle from '../../components/PieChart/PieChartWithPaddingAngle'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [tableHeading, setTableHeading] = useState('Your Investments')

  const handleChange = (event) => {
    setTableHeading(() => event.target.textContent)
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <div className={style.header} />
      <div className={style.container}>
        <div className={style.leftMenu}>
          <div className={style.portfolioCard}>
            <div className={style.cardHeader}>
              <p className={style.portfolioCardTitle}>Portfolio</p>
              <Link to='#' className={style.portfolioCardLink}>
                Learn More
              </Link>
            </div>
            <div className={style.cardBody}>
              <div className={style.estateHoldings}>
                <h5 className={style.estateTitle}>Real Estate Holdings</h5>
                <div className={style.estateCard}>
                  <p className={style.estateCardValue}>$25,000</p>
                </div>
              </div>
              <div className={style.estatePropertyContainer}>
                <div className={style.estatePropertyContainerItem}>
                  <p className={style.title}>Properties</p>
                  <div className={style.card}>3</div>
                </div>
                <div className={style.estatePropertyContainerItem}>
                  <p className={style.title}>Tokens</p>
                  <div className={style.card}>25</div>
                </div>
                <div className={style.estatePropertyContainerItem}>
                  <p className={style.title}>YTD Distributions</p>
                  <div className={style.card}>+$31</div>
                </div>
              </div>
            </div>
          </div>
          <PieChartWithPaddingAngle />
        </div>
        <div className={style.rightMenu}>
          <div className={style.rightMenuBtn}>
            <button
              className={style.investmentPledgeTableBtn}
              onClick={handleChange}
            >
              Your Investments
            </button>
            <button
              className={style.investmentPledgeTableBtn}
              onClick={handleChange}
            >
              Your Pledges
            </button>
          </div>
          <div className={style.rightMenuHeading}>
            <h3>{tableHeading}</h3>
            <button className={style.viewMarketplaceBtn}>
              + View Marketplace
            </button>
          </div>
          <DashboardTable tableSelected={tableHeading} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
