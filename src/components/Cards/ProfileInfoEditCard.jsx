import React, { useRef } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdModeEditOutline } from 'react-icons/md';


const ProfileInfoEditCard = ({ cardHeadingIcon,
    cardHeading,
    cardEditIcon,
    cardDescription,
    cardSaveIcon,
    aboutContent,
    setAboutContent,
    handleAboutChange,
    setAboutEditIcon,
    aboutEditIcon,
    preferenceContent,
    setPreferenceContent,
    preferenceEditIcon,
    setPreferenceEditIcon,
    handlePreferenceChange,
    content,
    EditIcon,
    handleTextAreaChange,
    placeholder,
    profilePageAllContent
}) => {



    const inputAboutRef = useRef()

    return (
        <>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between ms-1">
                        <label className="profile-side-headers d-flex align-items-center placeholder-glow">
                            {cardHeadingIcon}
                            <span className={profilePageAllContent ? "" : "placeholder px-3 w-100 py-1  rounded-1"}>{cardHeading}</span>
                        </label>

                        {
                            EditIcon ?
                                <span className={profilePageAllContent ? "" : "placeholder rounded-2"}>{cardEditIcon}</span>
                                :
                                <span className={profilePageAllContent ? "" : "placeholder rounded-2"}>{cardSaveIcon}</span>
                        }
                    </div>
                    <div className="ms-5 mt-3 profile-descriptions">
                        {/* {cardDescription} */}
                        {
                            content !== '' && EditIcon ?
                                <p>{content}</p>
                            :
                                <textarea autoFocus={ cardHeading === "About" ? true : ""} className={profilePageAllContent ? "w-100 p-3 textarea" : "placeholder px-3 w-100 py-1  rounded-2"} value={content} rows={4} placeholder={profilePageAllContent ? placeholder : ""} onChange={handleTextAreaChange}></textarea>
                        }
                        {/* <input type='text' className='w-100 pb-5' placeholder="Enter your text here.." /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfoEditCard
