import React, { useState } from 'react'
import portfolioData from '../Data/Datas'
import './Nav.css'
const Nav = () => {

    const { navbar } = portfolioData;
    const { part1, center, part2 } = navbar
    const { small, largeAndBold, logoTxt } = center;

    const [Active, setActive] = useState("Home");

    function handelActive(e) {
      setActive(e)
    }

    return (
        <div className='NavMain'>
            <div className="part1">
                <ul>
                    {
                        part1.map((el, i) => {
                            return (


                                <li key={i} className={`${Active == el ? 'Active' : ''}`} onClick={()=>{handelActive(el)}}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>

            <div className="center">
                <div className="logoTxt">{logoTxt}</div>
                <h5>{small}</h5>
                <h2>{largeAndBold}</h2>
            </div>



            <div className="part2">
                <ul>
                    {
                        part2.map((el, i) => {
                            return (


                                <li key={i} className={`${Active == el ? 'Active' : ''}`} onClick={()=>{handelActive(el)}}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav