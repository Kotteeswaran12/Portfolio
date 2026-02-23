import React from 'react'
import portfolioData from '../Data/Datas'
import './SideBar.css'
const SideBar = () => {
    const { navbar } = portfolioData;

    const { part1, part2 } = navbar;
    return (
        <div className='sidebarMain'>

            <div className="Actions">
                <ul>
                    {
                        part1.map((e, i) => {
                            return (
                                <li key={i}>{e}</li>
                            )
                        })
                    }

                    {
                        part2.map((e, i) => {
                            return (
                                <li key={i}>{e}</li>
                            )
                        })
                    }
                </ul>
            </div>



        </div>
    )
}

export default SideBar