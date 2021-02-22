import { useState } from 'react'

// import components
import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'

// import style
import '../styles/old-seasons.scss'

function OldSeasons() {
  const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  // const [solarTermsListed, setSolarTermsListed] = useState([])

  let solarTermList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ]

  let currentSolarTerm = 3
  let solarTermClicked = 10

  console.log(solarTermList[1])

  /*
  const getDataFromServer = async () => {
    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)

    // 2秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  */

  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <SolarTermPlate />
            <OldSeasonPageTitle />
            目前的節氣：{currentSolarTerm}
            <br />
            <button
              onClick={() => {
                setTargetSolarTerm(solarTermClicked)
              }}
            >
              點擊目標節氣書本
            </button>
            <br />
            要顯示的節氣：{targetSolarTerm}
          </div>

          <div className="col-xl-6 osb-book-col-outer">
            <div className="osb-book-col-grad"></div>
            <div className="row justify-content-center osb-book-col fadein-on-start">
              {/* 過往節氣選書卡片 */}
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
