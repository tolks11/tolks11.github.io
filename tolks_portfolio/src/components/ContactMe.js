import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from  "@fortawesome/free-solid-svg-icons"
import { faTshirt } from "@fortawesome/free-solid-svg-icons"

const ContactMe = () => {
    return(
        <div>
        <p>folow me: <a href="https://twitter.com/tolks1189" target="_blank"> <FontAwesomeIcon icon={faTwitter} /></a> </p>
        <p>view my current building: <a href="https://github.com/tolks11" target="_blank" style={{color: "hotpink"}}><FontAwesomeIcon icon={faGithubSquare}/></a> </p>
        <p>order appearal: <a href="https://www.dandrpromotions.com/" target="_blank" style={{color: "red"}}> <FontAwesomeIcon icon={faTshirt} /></a> !!</p>
        <p>get in touch: !!<a style={{color:"orange"}}><FontAwesomeIcon icon={faEnvelopeOpenText}/></a></p>
        <p></p>
        </div>
    )
}

export default ContactMe