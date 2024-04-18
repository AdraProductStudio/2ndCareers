import React from 'react'
import { FaDownload } from "react-icons/fa";
const DoubleButton = ({ firstButtonName, secondButtonName, cardIcon, firstCardColorclassName, secondCardColorclassName }) => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-2 mx-1">
            {
                firstButtonName === "Join Community" ?
                    <a href='http://google.com' role="button" className={`btn btn-${firstCardColorclassName} me-md-2 w-100`}>
                        {cardIcon}
                        {firstButtonName}
                    </a>
                    :
                    <a href='' download
                        className={`btn btn-${firstCardColorclassName} me-md-2 w-100`}
                        type="button">
                        {cardIcon}
                        {firstButtonName}
                    </a>
            }


            {
                secondButtonName === "Share" ?
                    <button
                        className={`btn btn-${secondCardColorclassName} w-100`}
                        type="button"
                        onClick={() => secondButtonName === "Share" ? "" : ""}
                        data-bs-toggle="modal"
                        data-bs-target={secondButtonName === "Share" ? "#shareModal" : ""}>
                        {secondButtonName}
                    </button>
                    :
                    <a href="http://google.com" role='button' className={`btn btn-${secondCardColorclassName} w-100`}>
                        {secondButtonName}
                    </a>
            }
        </div>
    )
}

export default DoubleButton