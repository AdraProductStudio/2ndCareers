import React from "react";
import { IoCalendarOutline, IoAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";

const ProfileInfoAddCard = ({ cardHeadingIcon, cardHeading, data }) => {



    return (
        <>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between ms-1">
                        <label className="profile-side-headers d-flex align-items-center">
                            {cardHeadingIcon}
                            <span>{cardHeading}</span>
                        </label>
                        {cardHeading === "Experience" ? 
                            <button type="button" title="Add Experience" className="btn btn-brand-color px-3 me-2" data-bs-toggle="modal" data-bs-target="#addExperienceModal">
                            <MdAddBox /> Add Experience
                        </button> : null
                        }
                        {cardHeading === "Education" ? 
                                <button type="button" title="Add Education" className="btn btn-brand-color px-3 me-2" data-bs-toggle="modal" data-bs-target="#addEducationModal">
                                <MdAddBox /> Add Education
                                </button> : null
                        }
                    </div>


                    <React.Fragment >
                                    <div className="ms-5">
                                        <div className="d-flex justify-content-between  mt-3">
                                            <label className="profile-inner-headers">
                                                {/* {cardHeading === "Experience" ? val.roleAndCompany : null}
                                                {cardHeading === "Education" ? val.qualification : null} */}
                                            </label>
                                            {/* {cardHeading === "Experience" ? <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Experience" data-bs-toggle="modal" data-bs-target="#editExperienceModal" /> : null}
                                            {cardHeading === "Education" ? <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Education" data-bs-toggle="modal" data-bs-target="#editEducationModal" /> : null} */}

                                        </div>

                                        {cardHeading === "Experience" ? 
                                         <p className="mt-1 profile-descriptions">
                                         Your Experience details will be displayed here..
                                     </p> :  <p className="mt-1 profile-descriptions">
                                            Your Education details will be displayed here..
                                        </p> }

                                        {/* <label className="profile-descriptions">
                                            <IoCalendarOutline /> {val.timePeriod}
                                            <span>
                                                <IoLocationOutline /> {val.location}
                                            </span>
                                        </label>
                                        <p className="mt-1 profile-descriptions">
                                            {val.description}
                                        </p> */}
                                        <hr className="" />
                                    </div>
                                </React.Fragment>



                    {/* {
                        data.map((val) => {
                            return (
                                <React.Fragment key={val.id}>
                                    <div className="ms-5">
                                        <div className="d-flex justify-content-between  mt-3">
                                            <label className="profile-inner-headers">
                                                {cardHeading === "Experience" ? val.roleAndCompany : null}
                                                {cardHeading === "Education" ? val.qualification : null}
                                            </label>
                                            {cardHeading === "Experience" ? <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Experience" data-bs-toggle="modal" data-bs-target="#editExperienceModal" /> : null}
                                            {cardHeading === "Education" ? <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Education" data-bs-toggle="modal" data-bs-target="#editEducationModal" /> : null}

                                        </div>


                                        <label className="profile-descriptions">
                                            <IoCalendarOutline /> {val.timePeriod}
                                            <span>
                                                <IoLocationOutline /> {val.location}
                                            </span>
                                        </label>
                                        <p className="mt-1 profile-descriptions">
                                            {val.description}
                                        </p>
                                        <hr className="" />
                                    </div>
                                </React.Fragment>
                            )
                        })
                    } */}


                </div>
            </div>
        </>
    )
}

export default ProfileInfoAddCard
