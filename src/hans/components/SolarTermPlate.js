import OldSeasonPageTitle from './OldSeasonPageTitle'

// import style
import '../styles/solar-term-plate.scss'

function SolarTermPlate() {
  return (
    <>
      <div className="col">
        <div className="row justify-content-center fadein-on-start">
          {/* <!-- 節氣圓盤 Start --> */}
          <ul className="solar-term-plate-v2 rotate">
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li className="slice">
              <div className="slice-contents"></div>
            </li>
            <li>
              <div className="red-center">
                <div className="red-center-bg-color"></div>
              </div>
            </li>
          </ul>
          {/* <!-- 節氣圓盤 end --> */}
        </div>
        <OldSeasonPageTitle />
      </div>
    </>
  )
}

export default SolarTermPlate
