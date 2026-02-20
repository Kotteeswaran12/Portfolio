import React from 'react'
import portfolioData from '../Data/Datas'
const Hero = () => {
    const { hero } = portfolioData;
    return (
        <div>
            {
                Object.entries(hero).map(([k, v]) => {
                    return (
                        <div className="main" key={k}>
                            <h1>{v}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hero