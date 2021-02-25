import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Aos from "aos"

function ToptenbookEven(props){
    useEffect(() => {

        Aos.init({ duration: 1200 })

    }, [])
    return(
        <>
        <Link to="#">
                <div className="rankingbook " data-aos="flip-right">
                <div className="chia_rankingbooktop d-flex flex-column justify-content-center chia_rankingbook_even yellow">

                    <div class="bookcover">
                        <div class="ranking">
                            {props.ranking}
                            </div>
                        <img src={props.ismonth ? props.Monthranking : props.Weekranking} height="100%" />
                    </div>
                </div>
                <div className="rankingbookword">
                    <p className="rankingtitle">{props.ismonth ? props.Monthtitle : props.Weektitle}</p>
                    <p className="rankingprice"><span>{props.ismonth ? props.Monthdiscount : props.Weekdiscount}折</span>{props.ismonth ? props.Monthprice : props.Weekprice}元</p>
                    <div className="chia_quickadd d-none">Qucik Add</div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default ToptenbookEven