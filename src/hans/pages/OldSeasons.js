import { useState, useEffect } from 'react'

// import components
import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'
import SelectedSolarTermInfo from '../components/SelectedSolarTermInfo'

// import style
import '../styles/old-seasons.scss'
import '../styles/solar-term-plate-filler.scss'

function OldSeasons(props) {
  // const [targetSolarTerm, setTargetSolarTerm] = useState(0)
  const [solarTermToShow, setSolarTermToShow] = useState('')
  const [solarTermDesc, setSolarTermDesc] = useState('')
  const [showBreadCrumb, setShowBreadCrumb] = useState(false)
  const [displaySolarTermInfo, setDisplaySolarTermInfo] = useState('displayOff')
  const [displayTitle, setDisplayTitle] = useState('displayOn')

  // 處理轉盤大小
  const [solarPlateSize, setSolarPlateSize] = useState(
    'solar-term-plate-v2 rotate'
  )
  const [redCenterSize, setRedCenterSize] = useState('red-center')
  const [redCenterText, setRedCenterText] = useState('fadeOut')

  const [solarTermClicked, setSolarTermClicked] = useState(true)

  // let solarTermList = []
  let currentSolarTerm = 3

  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer(currentSolarTerm)
  }, [])

  // 和伺服器要資料
  const getDataFromServer = async (e) => {
    const response = await fetch('http://localhost:3333/old-seasons', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    console.log(data['solar_term_list'][e])
    setSolarTermDesc(data['solar_term_list'][e]['st_desc'])
    setSolarTermToShow(data['solar_term_list'][e]['solar_term'])

    return data
  }

  function handlePlateToggle() {
    // 設定圓盤狀態
    setSolarPlateSize(
      solarTermClicked
        ? 'solar-term-plate-v2-small'
        : 'solar-term-plate-v2 rotate'
    )
    setRedCenterSize(solarTermClicked ? 'red-center-small' : 'red-center')
    setRedCenterText(solarTermClicked ? 'fadeIn' : 'fadeOut')

    // 設定節氣說明狀態與頁面標題
    setDisplaySolarTermInfo(solarTermClicked ? 'displayOn' : 'displayOff')
    setDisplayTitle(solarTermClicked ? 'displayOff' : 'displayOn')

    setSolarTermClicked(!solarTermClicked)

    console.log('clicked!')
    console.log(solarTermClicked)
  }

  let checkBreadCrumShow = showBreadCrumb ? 'fadeIn' : 'fadeOut'

  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <SolarTermPlate
              solarTermToShow={solarTermToShow}
              solarPlateSize={solarPlateSize}
              redCenterSize={redCenterSize}
              redCenterText={redCenterText}
            />
            <div className={'hans-bread-crumb ' + checkBreadCrumShow}>
              <MultiLevelBreadCrumb />
            </div>
            <div className="row solar-term-plate-filler"></div>
            <br />
            <div className={displayTitle}>
              <OldSeasonPageTitle />
            </div>
            <div className={displaySolarTermInfo}>
              <SelectedSolarTermInfo />
            </div>
            目前的節氣：{currentSolarTerm}
            <br />
            {/* 目標節氣書本： {targetSolarTerm} */}
            <br />
            節氣：{solarTermToShow}
            <br />
            描述：{solarTermDesc}
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
              <button
                onClick={() => {
                  setShowBreadCrumb(!showBreadCrumb)
                  handlePlateToggle()
                }}
              >
                點擊目標節氣書本
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
