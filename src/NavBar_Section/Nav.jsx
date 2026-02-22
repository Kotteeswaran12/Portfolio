import  { useEffect, useRef, useState } from 'react'
import portfolioData from '../Data/Datas'
import './Nav.css'
import gsap from 'gsap'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Nav = () => {

    const menuBtnRef = useRef();
    const logo = useRef();
    const { navbar } = portfolioData;
    const { part1, center, part2 } = navbar
    const { small, largeAndBold, logoTxt } = center;
    const [visibleText, setVisibleText] = useState(false);
    const [Active, setActive] = useState("Home");

    const[isMobile , setisMobile] = useState(innerWidth < 1000);

    const[sideBar , setSideBar] = useState(false);

   

    function handelActive(e) {
        setActive(e)
    }

    useEffect(()=>{
        if(sideBar && menuBtnRef.current){
            gsap.to(menuBtnRef.current , {
                x:-20 , opacity:0 , ease:'expo.inOut'
            })
        }

      const  handelMobileSize=()=>{
            setisMobile(window.innerWidth<1000)
        }

        window.addEventListener('resize',handelMobileSize)
    },[sideBar])

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
            isMobile &&  !sideBar &&(
                
                    <CiMenuBurger size={20} onClick={()=>{setSideBar(true) }}  ref={menuBtnRef}/>
                
            )
           }
            {
            isMobile &&  sideBar &&(
                
                    <IoClose size={25} onClick={()=>{setSideBar(false) }}  />
                
            )
           }
        </div>
    )
}

export default Nav