import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from  "@fortawesome/free-solid-svg-icons"
import { faTshirt } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return (
        <div>
            <footer>
            <a href="https://twitter.com/tolks1189" target="_blank"> <FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/tolks11" target="_blank" style={{color: "hotpink"}}><FontAwesomeIcon icon={faGithubSquare}/></a>
            <a href="https://www.dandrpromotions.com/" target="_blank" style={{color: "red"}}> <FontAwesomeIcon icon={faTshirt} /></a> 
            <a style={{color: "orange"}}><FontAwesomeIcon icon={faEnvelopeOpenText}/></a>
            </footer>
            
        </div>
    )
}

export default Footer
