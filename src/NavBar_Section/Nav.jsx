import  { useRef, useState } from 'react'
import portfolioData from '../Data/Datas'
import './Nav.css'
import gsap from 'gsap'
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {


    const logo = useRef();
    const { navbar } = portfolioData;
    const { part1, center, part2 } = navbar
    const { small, largeAndBold, logoTxt } = center;
    const [visibleText, setVisibleText] = useState(false);
    const [Active, setActive] = useState("Home");

    const[isMobile , setisMobile] = useState(innerWidth < 1000);

   

    function handelActive(e) {
        setActive(e)
    }


    return (
        <div className={`${isMobile? 'mobileNav' : "NavMain"}`} >
           {
            !isMobile &&( <div className="part1">
                <ul>
                    {
                        part1.map((el, i) => {
                            return (


                                <li key={i} className={`${Active == el ? 'Active' : 'actions'}`} onClick={() => { handelActive(el) }}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>)
           }

            <div className="center" onMouseEnter={() => {
                setVisibleText(true)
                gsap.to(logo.current, {
                    scale: 1,
                    // rotate: 360,
                    x: -5,
                    duration: 0.8,
                    ease: "bounce.out"
                })
            }}
                onMouseLeave={() => {
                    setVisibleText(false)
                    gsap.to(logo.current, {
                        scale: 1,
                        // rotate: -360,
                        x: 0,
                        duration: 0.8,
                        ease: "elastic.out(1,0.3)"
                    })
                }}>
                <div className="logoTxt" ref={logo} >{logoTxt}</div>
                <div className="texts">
                    {visibleText && <h5>{small}</h5>}
                    {!visibleText && <h3>{largeAndBold}</h3>}
                    {visibleText && <h3>Kotteeswaran v</h3>}
                </div>
            </div>



           {
            !isMobile && ( <div className="part2">
                <ul>
                    {
                        part2.map((el, i) => {
                            return (


                                <li key={i} className={`${Active == el ? 'Active' : 'actions'}`} onClick={() => { handelActive(el) }}>{el}</li>


                            )
                        })
                    }
                </ul>
            </div>)
           }


           {
            isMobile && (
                <CiMenuBurger />
            )
           }
        </div>
    )
}

export default Nav