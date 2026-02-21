import  { useRef, useState } from 'react'
import portfolioData from '../Data/Datas'
import './Nav.css'
import gsap from 'gsap'

const Nav = () => {


    const logo = useRef();
    const { navbar } = portfolioData;
    const { part1, center, part2 } = navbar
    const { small, largeAndBold, logoTxt } = center;
    const [visibleText, setVisibleText] = useState(false);
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


                                <li key={i} className={`${Active == el ? 'Active' : 'actions'}`} onClick={() => { handelActive(el) }}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>

            <div className="center" onMouseEnter={() => {
                setVisibleText(true)
                gsap.to(logo.current, {
                    scale: 1.2,
                    rotate: 360,
                    x: -10,
                    duration: 0.8
                })
            }}
                onMouseLeave={() => {
                    setVisibleText(false)
                    gsap.to(logo.current, {
                        scale: 1,
                        rotate: -360,
                        x: 0,
                        duration: 0.8
                    })
                }}>
                <div className="logoTxt" ref={logo} >{logoTxt}</div>
                <div className="texts">
                    {visibleText && <h5>{small}</h5>}
                    {!visibleText && <h2>{largeAndBold}</h2>}
                    {visibleText && <h2>Kotteeswaran v</h2>}
                </div>
            </div>



            <div className="part2">
                <ul>
                    {
                        part2.map((el, i) => {
                            return (


                                <li key={i} className={`${Active == el ? 'Active' : 'actions'}`} onClick={() => { handelActive(el) }}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav