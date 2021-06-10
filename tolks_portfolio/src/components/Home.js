import React from 'react'
import Typed from 'react-typed'

const Home = () => {
    const handleClick = () => console.log('thanks')

    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>deeply interested in cryptoeconomics, emerging tech, and zk technology</h1>
                <Typed className="typed-text"
                strings={["ethereum", "crypto & web3", "coding", "future of france", "sports"]}
                typeSpeed={50}
                backSpeed={50}
                loop
                />
            <button onClick={handleClick} className="btn-contact">Contact Me!</button>

            </div>
        </div>
    )
}

export default Home
