import React from 'react'
import { withRouter } from 'react-router-dom'
// import $ from 'jquery'

// svg-icon
import '../styles/yen-index.scss'
import SvgCircle from './svg/SvgCircle'
import SvgLadybug from './svg/SvgLadybug'
import SvgRun from './svg/SvgRun'
import ActEvent from '../pages/ActEvent'

function IndexHot(props) {
  // let urlPage = props.location.search
  // console.log('IndexHot', props)

  // 如果切換分頁就隱藏這個區塊
  // TODO: 切換分頁隱藏區塊有成功，但重新要連回/activity頁面會噴undefined
  if (props.location.search !== '') {
    console.log('clear', props)
    return <></>
  }
  const hoverCard = (
    <>
      {props.hotLists.rows &&
        props.hotLists.rows.map((value, index) => {
          const pic =
            'http://localhost:3000/images/yen/event/' +
            value.act_name +
            '/0.jpg'

          const slider = document.querySelector('.items')
          let isDown = false
          let startX
          let scrollLeft

          slider.addEventListener('mousedown', (e) => {
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
          })

          slider.addEventListener('mouseleave', () => {
            isDown = false
            slider.classList.remove('active')
          })

          slider.addEventListener('mouseup', () => {
            isDown = false
            slider.classList.remove('active')
          })

          slider.addEventListener('mousemove', (e) => {
            if (!isDown) return //stop the fn running
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
          })

          return (
            <div
              className="yen-hot-cards-s yen-hover-box item"
              key={index}
              onClick={() => {
                props.history.push('/activity/event/' + value.act_sid)
              }}
            >
              <div className="yen-hot-cover-box d-flex">
                <div className="yen-hot-cover">
                  <img className="yen-hot-cards-img" src={pic} alt="" />
                  <div className="yen-hot-cover-text d-none">
                    <ActEvent />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )

  return (
    <>
      <div className="yen-overflow-box">
        <div className="yen-hot">
          <div className="yen-title-box d-flex">
            <div className="yen-circle">
              <SvgCircle />
            </div>
            <span className="yen-title-text">熱門活動</span>
          </div>
          <div className="yen-hot-card-box items">
            {/* <div className="yen-hot-cards-s yen-hover-box">
                  <div className="yen-hot-cover-box d-flex"> */}
            {hoverCard}
            {/* <div className="yen-hot-cover">
                      <img
                        className="yen-hot-cards-img"
                        src="http://localhost:3000/images/yen/event/隨心  香氛自由書寫課。內在靜觀 l 台北場/0.jpg"
                        alt=""
                      />
                      <div className="yen-hot-cover-text">
                        <h5>title</h5>
                        <br />
                        <br />
                        <p>成立花蓮運行保存傳奇實。</p>
                        <p>成立花蓮運行保存傳奇實。</p>
                      </div>
                    </div> */}
            {/* </div>
                </div> */}

            {/* <div className="yen-hot-cards-l yen-hover-box"></div>
                <div className="yen-hot-cards-s yen-hover-box"></div>
                <div className="yen-hot-cards-l yen-hover-box"></div>
                <div className="yen-hot-cards-s yen-hover-box"></div>
                <div className="yen-hot-cards-l yen-hover-box"></div> */}

            <div className="yen-hot-ladybug">
              <SvgLadybug />
            </div>
          </div>
          <div className="yen-hot-run">
            <SvgRun />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexHot)
