import React, { useEffect, useRef, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { LuUpload } from "react-icons/lu";
import { IoCalendarOutline, IoAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { MdAppRegistration } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiNotificationBadgeFill } from "react-icons/ri";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import { VideoJS } from "../components/VideoJS/Video";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import ProfileInfoEditCard from "../components/Cards/ProfileInfoEditCard";
import { FaCalendar } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
// import toast, { Toaster } from 'react-hot-toast';
import ProfileInfoAddCard from "../components/Cards/ProfileInfoAddCard";









const Profile = () => {
  const professionalPageDashboardMenu = ["Home", "Learning", "Community"];
  const [file, setFile] = useState({});
  const [videoFile, setVideoFile] = useState(false);
  const [dateOfBirthShow, setDateOfBirthShow] = useState(false);

  const skillsData = [
    {
      id: 1,
      skillName: "HTML",
    },
    {
      id: 2,
      skillName: "CSS",
    },
    {
      id: 3,
      skillName: "ReactJS",
    },
    {
      id: 4,
      skillName: "Python",
    },
  ]

  const [skillsObj, setSkillsObj] = useState({
    skillName: "",
    skillLevel: ""
  })

  const [skillsArray, setSkillsArray] = useState([])

  const languagesData = [
    {
      id: 1,
      languageName: "Tamil",
    },
    {
      id: 2,
      languageName: "English",
    },
    {
      id: 3,
      languageName: "Malayalam",
    },
    {
      id: 4,
      languageName: "Japanese",
    },
    {
      id: 5,
      languageName: "Spanish",
    },
  ]

  const [languagesObj, setLanguagesObj] = useState({
    languageName: "",
    languageLevel: ""
  })

  const [languagesArray, setLanguagesArray] = useState([]);

  const handleResumeUpload = (e) => {
    console.log(e.target.files[0])
  }

  const handleProfilePhotoUpload = (e) => {
    console.log(e.target.files[0])
  }

  const handleVideoUpload = (e) => {
    console.log(e.target.files)
    setVideoFile(true)
  }

  const inputRef = useRef()

  const [editClick, setEditClick] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    phone: 9876543210,
    address: "India"
  })

  const handlePeronalDetailsChange = (e) => {
    setPersonalDetails(prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handlePeronalDetailsEdit = () => {
    setEditClick(!editClick)
    // inputRef.current.focus()
  }


  // Handle Skill

  const handleSkillName = (skillName) => {
    setSkillsObj({ ...skillsObj, skillName: skillName })
  }

  const handleSkillLevel = (skillLevel) => {
    setSkillsObj({ ...skillsObj, skillLevel: skillLevel })
  }

  const handleAddSkill = (skillName, skillLevel) => {
    setSkillsArray(prevState => [...prevState, skillsObj])
  }


  // Handle Language
  const handleLanguageName = (languageName) => {
    setLanguagesObj({ ...languagesObj, languageName: languageName })
  }

  const handleLanguageLevel = (languageLevel) => {
    setLanguagesObj({ ...languagesObj, languageLevel: languageLevel })
  }

  const handleAddLanguage = (languageName, languageLevel) => {
    setLanguagesArray(prevState => [...prevState, languagesObj])
  }

  // const handleDateOfBirthShow = () => {
  //   setDateOfBirthShow(!dateOfBirthShow);
  //   if (dateOfBirthShow === true) {
  //     toast('Your DOB will be visible to the Employer')
  //   } else {
  //     toast.success('Produto removido com sucesso')
  //   }
  // }

  let experienceData = [
    {
      id: 1,
      roleAndCompany: "UI Designer | Market Studios",
      timePeriod: "Oct 2012 - Sep 2015",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
    {
      id: 2,
      roleAndCompany: "UX Designer | Market Studios",
      timePeriod: "Oct 2013 - Sep 2014",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
    {
      id: 3,
      roleAndCompany: "UI Designer | Market Studios",
      timePeriod: "Oct 2014 - Sep 2015",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
    {
      id: 4,
      roleAndCompany: "UI Designer | Market Studios",
      timePeriod: "Oct 2015 - Sep 2016",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
  ]

  let educationData = [
    {
      id: 1,
      qualification: "UI Designer",
      timePeriod: "Oct 2012 - Sep 2015",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
    {
      id: 2,
      qualification: "UX Designer",
      timePeriod: "Oct 2013 - Sep 2014",
      location: " Los Angels",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolor, recusandae iste quos placeat enim cum facere accusantium nemo deserunt voluptas quisquam doloremque officiis. Adipisci, odio!"
    },
  ]






  // About edit section 
  const [aboutContent,setAboutContent] = useState("")
  const [aboutEditIcon,setAboutEditIcon] = useState(false)

  const handleAboutChange = (e)=>{
    setAboutContent(e.target.value)
  }



    // Preference edit section 
    const [preferenceContent,setPreferenceContent] = useState("")
    const [preferenceEditIcon,setPreferenceEditIcon] = useState(false)
  
    const handlePreferenceChange = (e)=>{
      setPreferenceContent(e.target.value)
    }

  return (
    <>

      <DashboardNavbar
        profileImage="https://bootdey.com/img/Content/avatar/avatar1.png"
        profileName="George Martin"
        dashboadMenus={professionalPageDashboardMenu}
      />
      <section className="profile-bg">
        <div className="container-fluid mb-3">
          <div className="p-2 p-lg-5">

            <div className="row g-3">

              <div className="col-lg-3">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center pt-1">
                    <div className="w-100">


                      <div className="row justify-content-center p-0">
                        <div className="pic-holder mb-0">
                          <img id="profilePic" src="https://bootdey.com/img/Content/avatar/avatar1.png" width={150} height={150} />

                          <label htmlFor="newProfilePhoto" className="upload-file-block" data-bs-toggle="modal" data-bs-target="#profilePhotoModal">
                            <div className="text-center">
                              <MdAddAPhoto className="fs-5" />
                              <div className="text-uppercase">
                                Update <br /> Profile Photo
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>


                      <div className="text-center pt-4">
                        <h5 className="text-dark font-size-20">
                          George Martin
                        </h5>
                      </div>

                      <div className="p-3 pb-0">
                        <div className="progress" style={{ height: "1.2rem" }}>
                          <div
                            className="progress-bar progress-bar-color"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between ms-1 my-3">
                      <label className="profile-side-headers d-flex align-items-center">
                        <PiBagFill className="me-4 brand-color" />
                        <span>Personal details</span>
                      </label>
                      {
                        editClick === false ?
                          <MdModeEditOutline
                            className="icon edit-icon fs-3 brand-color"
                            title="Edit Personal details"
                            onClick={handlePeronalDetailsEdit} />
                          :
                          <MdSave
                            className="icon edit-icon fs-3 brand-color"
                            title="Save Personal details"
                            onClick={handlePeronalDetailsEdit} />
                      }
                    </div>

                    <div className="">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item py-3 pe-0 border-0 d-flex align-items-center justify-content-between">
                          <div>
                            <FaCalendar className="me-3" />
                            01/01/1970
                          </div>
                          <div>
                            <label className="switch " title="Show DOB to the Employer" >
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                    
                          </div>
                        </li>
                        <li className="list-group-item py-3 border-0 d-flex align-items-center">
                          <FaEnvelope className="me-3" />
                          georgemartin@gmail.com
                        </li>
                        <li className="list-group-item py-3 border-0 d-flex align-items-center">
                          <FaPhone className="me-3" />
                          {editClick === false ?
                            <input
                              className="non-edit-input d-block w-100"
                              name="phone"
                              disabled
                              value={personalDetails.phone} />
                            :
                            <input

                              className="personal-detail-input "
                              type="number"
                              name="phone"
                              value={personalDetails.phone}
                              onChange={handlePeronalDetailsChange} />
                          }
                        </li>
                        <li className="list-group-item py-3 border-0 d-flex align-items-center">
                          <IoLocationSharp className="me-3" />
                          {editClick === false ?
                            <input
                              className="non-edit-input "
                              name="text"
                              disabled
                              value={personalDetails.address} />
                            : <input
                              className="personal-detail-input d-inline-block"
                              type="text"
                              name="address"
                              value={personalDetails.address}
                              onChange={handlePeronalDetailsChange} />
                          }
                        </li>
                      </ul>
                    </div>

                    {/* <div className="container px-5">
                      <table cellPadding="15px" className="w-100 text-start">
                        <tbody>
                          <tr title="Hide DOB to the employee">
                            <td><input type="checkbox" /><span className="ms-3">Date of Birth</span></td>
                            <td>11/12/1990</td>
                            <td>11/12/1990</td>
                          </tr>

                          <tr>
                            <td><input type="checkbox" className="invisible-checkbox" /><span className="ms-3">Mail</span></td>
                            <td>georgemartin@gmail.com</td>
                          </tr>

                          <tr>

                            <td><input type="checkbox" className="invisible-checkbox" /><span className="ms-3">Phone</span></td>
                            <td className="">{editClick === false ?
                              <input
                                className="non-edit-input "
                                name="phone"
                                disabled
                                value={personalDetails.phone} />
                              :
                              <input

                                className="personal-detail-input "
                                type="number"
                                name="phone"
                                value={personalDetails.phone}
                                onChange={handlePeronalDetailsChange} />
                            }
                            </td>
                          </tr>

                          <tr>
                            <td><input type="checkbox" className="invisible-checkbox" /><span className="ms-3">Address</span></td>
                            <td>{editClick === false ?
                              <input
                                className="non-edit-input "
                                name="text"
                                disabled
                                value={personalDetails.address} />
                              : <input
                                className="personal-detail-input d-inline-block"
                                type="text"
                                name="address"
                                value={personalDetails.address}
                                onChange={handlePeronalDetailsChange} />
                            }
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div
                      className="border rounded-5 py-5"
                      onClick={() =>
                        document.getElementById("input-file").click()
                      }
                    >
                      <input
                        type="file"
                        className="form-control"
                        id="input-file"
                        hidden
                        accept=".doc, .docx,.pdf, .txt"
                        onChange={handleResumeUpload}
                      />
                      <div className="text-center">
                        <div className="fs-2">
                          <LuUpload />
                        </div>
                        <p className="px-5 m-0 pt-5">Drag and drop or click here to upload resume</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <ProfileInfoEditCard
              content={aboutContent}
              EditIcon={aboutEditIcon}
              handleTextAreaChange={handleAboutChange}
              cardHeadingIcon={<FaUserTie className="me-4 fs-3 brand-color" />}
              cardHeading="About"
              cardSaveIcon={<MdSave className={`icon edit-icon fs-3 ${aboutContent==='' ? 'text-muted pe-none':'brand-color'}`} title="Save About" onClick={() => setAboutEditIcon(!aboutEditIcon)}/>}
              cardEditIcon={<MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit About"  onClick={() => setAboutEditIcon(!aboutEditIcon)}/>}
              cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                asperiores blanditiis natus quo repellat, eius, soluta sed
                architecto accusantium eum veritatis at voluptas rem odit
                corrupti earum! Minima itaque sunt a quos culpa laudantium
                totam reiciendis. Laudantium quae aspernatur quas cupiditate
                debitis expedita placeat iusto esse culpa tenetur aliquam
                recusandae quaerat repellendus fugiat voluptates laborum
                dolores, facere eveniet impedit sit. Asperiores, distinctio?"
            />

            <ProfileInfoAddCard
              cardHeadingIcon={<PiBagFill className="me-4 brand-color" />}
              cardHeading="Experience"
              data={experienceData}

            />

            <ProfileInfoAddCard
              cardHeadingIcon={<PiBagFill className="me-4 brand-color" />}
              cardHeading="Education"
              data={educationData}

            />


            {/* <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers d-flex align-items-center">
                    <FaGraduationCap className="me-4 brand-color" />
                    <span>Education</span>
                  </label>
                  <div>
                    <button type="button" title="Add Education" className="btn btn-brand-color px-3 me-2" data-bs-toggle="modal" data-bs-target="#addEducationModal">
                      <MdAddBox /> Add Education
                    </button>
                  </div>
                </div>
                <div className="ms-5">
                  <div className="d-flex justify-content-between  mt-3">
                    <label className="profile-inner-headers">Los Angels</label>
                    <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Education" data-bs-toggle="modal" data-bs-target="#editEducationModal" />
                  </div>


                  <label className="profile-descriptions">
                    <IoCalendarOutline /> Oct 2012 - Sep 2015
                    <div className="vr ms-3"></div>
                    <span>
                      <IoLocationOutline /> Los Angels
                    </span>
                  </label>
                  <p className="mt-1 profile-descriptions">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, recusandae iste quos placeat enim cum facere
                    accusantium nemo deserunt voluptas quisquam doloremque
                    officiis. Adipisci, odio!
                  </p>


                </div>
              </div>
            </div> */}

            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex profile-side-headers align-items-center">
                  <div className="flex-grow-1">
                    <label className="profile-side-headers">
                      <HiLightBulb className="me-4 brand-color" />
                      <span>Skills</span>
                    </label>
                  </div>
                  <div className="p-1">
                    <div>
                      <button type="button" title="Add Skill" className="btn btn-brand-color px-3 ms-5" data-bs-toggle="modal" data-bs-target="#addSkillModal " >
                        <MdAddBox /> Add Skill
                      </button>
                    </div>
                  </div>
                </div>



                <div className="d-flex justify-content-between mt-3">
                  <div className="row row-cols-auto ms-5 g-3 profile-descriptions">
                    <div className="col">
                      <p>Your Skills will be displayed here..</p>
                    </div>
                  </div>
                </div>


                {/* <div className="d-flex justify-content-between mt-3">
                  <div className="row row-cols-auto ms-5 g-3 profile-descriptions">
                    <div className="col">
                      <div className=" border rounded-2 p-2 fw-bold">
                        Python - <span className="fw-normal">Expert</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className=" border rounded-2 p-2 fw-bold">
                        Python - <span className="fw-normal">Expert</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className=" border rounded-2 p-2 fw-bold">
                        Python - <span className="fw-normal">Expert</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className=" border rounded-2 p-2 fw-bold">
                        Python - <span className="fw-normal">Expert</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className=" border rounded-2 p-2 fw-bold">
                        Python - <span className="fw-normal">Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pt-2">
                    <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Skill" data-bs-toggle="modal" data-bs-target="#editSkillModal " />
                  </div>
                </div> */}

                <br />



              </div>


            </div>



            <ProfileInfoEditCard
              content={preferenceContent}
              EditIcon={preferenceEditIcon}
              handleTextAreaChange={handlePreferenceChange}
              cardHeadingIcon={<MdAppRegistration className="me-4 brand-color" />}
              cardHeading="Preference"
              cardSaveIcon={<MdSave className={`icon edit-icon fs-3 ${preferenceContent==='' ? 'text-muted pe-none':'brand-color'}`} title="Save Preference" onClick={() => setPreferenceEditIcon(!preferenceEditIcon)}/>}
              cardEditIcon={<MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Preference" onClick={() => setPreferenceEditIcon(!preferenceEditIcon)}/>}
              cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                  asperiores blanditiis natus quo repellat, eius, soluta sed
                  architecto accusantium eum veritatis at voluptas rem odit
                  corrupti earum! Minima itaque sunt a quos culpa laudantium
                  totam reiciendis. Laudantium quae aspernatur quas cupiditate
                  debitis expedita placeat iusto esse culpa tenetur aliquam
                  recusandae quaerat repellendus fugiat voluptates laborum
                  dolores, facere eveniet impedit sit. Asperiores, distinctio?"
            />


            <div className="row mt-2 g-3">
              <div className="col-12 col-md-6 mb-3 mb-sm-0">
                <div className="card h-100 border-0 shadow-sm rounded-4 ">
                  <div className="card-body">
                    <div className="d-flex justify-content-between ms-1">
                      <label className="profile-side-headers d-flex align-items-center">
                        <FaUserTie className="me-4 brand-color" />
                        <span>Video</span>
                      </label>
                      <div>
                        {videoFile === false ?
                          <button type="button" className="btn btn-brand-color px-3 ms-5 me-3" data-bs-toggle="modal" data-bs-target="#videoUploadModal">
                            <MdAddBox /> Add Video
                          </button> : null}
                        {videoFile === true ? <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Video" data-bs-toggle="modal" data-bs-target="#editVideoModal" /> : null}
                      </div>
                    </div>
                    
                      {videoFile ?  <div className="p-3 "><VideoJS /></div>: 
                          <div className="d-flex justify-content-center align-items-center h-75 profile-descriptions">
                            Share a video introducing more about yourself, your experiences, and anything else that might not come across as effectively in writing
                            </div>
                          }
                    
                  </div>
                </div>
              </div>
              <div className="col col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="d-flex  profile-side-headers align-items-center">
                      <div className="flex-grow-1 mb-4">
                        <label className="profile-side-headers ">
                          <IoLanguage className="me-4 brand-color" />
                          <span>Languages</span>
                        </label>
                      </div>
                      <div className="p-1">
                        <div>
                          <button type="button" className="btn btn-brand-color px-3 ms-5" data-bs-toggle="modal" data-bs-target="#addLanguageModal">
                            <MdAddBox /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="ms-5 mt-3">
                    <p className="mt-1 profile-descriptions">
                        Your Languages will be displayed here..
                      </p>
                      {/* <div className="d-flex justify-content-between">
                        <label className="profile-inner-headers">French</label>
                        <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Language" data-bs-toggle="modal" data-bs-target="#editLanguageModal" />
                      </div>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <label className="profile-inner-headers">French</label>
                        <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Language" data-bs-toggle="modal" data-bs-target="#editLanguageModal" />
                      </div>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <label className="profile-inner-headers">French</label>
                        <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Language" data-bs-toggle="modal" data-bs-target="#editLanguageModal" />
                      </div>
                      <p className="mt-1 profile-descriptions">
                        Professional Working Efficiency
                      </p> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body ">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers d-flex align-items-center">
                    <FaUserTie className="me-4 brand-color" />
                    <span>Additional Information</span>
                  </label>
                  <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Information" data-bs-toggle="modal" data-bs-target="#additionalInformationModal" />

                </div>

                <div className="ms-5 mt-3">
                <ul className="mt-1 profile-descriptions">
                    <li>
                    Add other information such as board positions, volunteering roles, certifications, awards, etc.
                    </li>
                    </ul>
                  {/* <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul>
                  <label className="profile-inner-headers">Certificates</label>
                  <ul className="mt-1 profile-descriptions">
                    <li>
                      Raleigh Jaycee of the Year 2008 (Junior Chamber of
                      Commence)
                    </li>
                    <li>
                      Wake County Schools Healthy Kids Advisory Board (2008 -
                      Present)
                    </li>
                  </ul> */}
                </div>

              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex  profile-side-headers align-items-center">
                  <div className="flex-grow-1">
                    <label className="profile-side-headers">
                      <IoShareSocialSharp className="me-4 brand-color" />
                      <span>Social Links</span>
                    </label>
                  </div>
                  <div className="p-1">
                    <button type="button" title="Add Social Link" className="btn btn-brand-color px-3 ms-5" data-bs-toggle="modal" data-bs-target="#addSocialLinkModal"  >
                      <MdAddBox /> Add Social Link
                    </button>
                  </div>
                </div>
                <div className="ms-5">
                <ul className="mt-1 profile-descriptions">
                    <li>
                    Provide links to your social media accounts such as LinkedIn, X, etc.
                    </li>
                    </ul>
                  {/* <label className="profile-inner-headers">Linkedin</label>
                  <p className="mt-1 profile-descriptions d-flex justify-content-between">
                    <a href="#">https://www.linkedin.com/54124626</a>
                    <MdModeEditOutline className="icon edit-icon fs-4 brand-color" title="Edit Social Link" data-bs-toggle="modal" data-bs-target="#editSocialLinkModal" />

                  </p> */}
                </div>

              </div>
            </div>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between ms-1">
                  <label className="profile-side-headers d-flex align-items-center">
                    <RiNotificationBadgeFill className="me-4 brand-color" />
                    <span>Expert Notes</span>
                  </label>
                </div>
                {/* <p className="ms-5 mt-3 profile-descriptions">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt a ipsum vitae assumenda iure sequi? Dicta saepe
                  asperiores blanditiis natus quo repellat, eius, soluta sed
                  architecto accusantium eum veritatis at voluptas rem odit
                  corrupti earum! Minima itaque sunt a quos culpa laudantium
                  totam reiciendis. Laudantium quae aspernatur quas cupiditate
                  debitis expedita placeat iusto esse culpa tenetur aliquam
                  recusandae quaerat repellendus fugiat voluptates laborum
                  dolores, facere eveniet impedit sit. Asperiores, distinctio?
                </p> */}
                <p className="ms-5 mt-3 profile-descriptions">
                If you have a premium account, schedule a call with the 2nd Careers team from your profile. Based on your discussion with experts, you will receive expert capture which can be published to the employers upon your consent.




                </p>
                <div className="form-check ms-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I provide consent to 2nd Careers to market the expert notes
                    and my profile to potential employees
                  </label>
                </div>
                <button className="btn btn-brand-color mt-3 ms-5">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Profile Photo upload Modal */}

        <div className="modal fade" id="profilePhotoModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Profile Photo Upload</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="w-100">
                      <div className="text-center position-relative">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="avatar-xxl rounded-4"
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="text-center pt-4">
                        <button type="button" htmlFor="fileInput" className="btn btn-brand-color mx-3 upload-btn" data-bs-dismiss="modal" onClick={() => document.getElementById("profile-photo").click()}>
                          <HiOutlineUpload className="me-2 fs-4" />
                          <input type="file" id="profile-photo" hidden className="form-control" onChange={handleProfilePhotoUpload} />
                          <span>Upload Photo</span>
                        </button>
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deletePhotoModal">
                          <MdDelete className="me-2 fs-4" />
                          <span>Delete Photo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deletePhotoModal" aria-hidden="true" aria-labelledby="deletePhotoModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="deletePhotoModal">Delete Profile Photo</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-4">
                Are you sure to delete this profile photo?
                <div className="text-center pt-4">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    {/* <ImCancelCircle className="me-2 fs-4" /> */}

                    <span>Cancel</span>
                  </button>
                  <button type="button" className="btn btn-brand-color mx-3 upload-btn">
                    {/* <MdDelete className="me-2 fs-4" /> */}
                    <label className="custom-file-label upload-btn">Delete</label>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>



        {/* About Modal */}


        <div className="modal fade" id="editAbout" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">About</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row mb-2 mt-3">
                    <div className="col-lg-12 d-flex justify-content-between">
                      <div>Description</div>
                      <div>(Min 30 char - Max 10000 char)</div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <textarea className="p-3 rounded-3" rows={15} placeholder="Enter your text here.."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="container">
                  <button type="button" className="btn btn-brand-color w-100 my-2">Save</button>
                  <button type="button" className="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* Add Experience Modal */}


        <div className="modal fade" id="addExperienceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Experience</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="jobTitle" className="form-label">Job Title</label>
                      <input type="text" className="form-control" id="jobTitle" aria-describedby="jobTitle" placeholder="Enter your Job" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">Company Name</label>
                      <input type="text" className="form-control pb-4" id="companyName" aria-describedby="companyName" placeholder="Enter your Company name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input type="text" className="form-control pb-4" id="location" aria-describedby="location" placeholder="Enter your Location" />
                    </div>
                    <div className="row justify-content-between mb-3">
                      <div className="col-lg-6">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input type="date" className="form-control " id="start-date" aria-describedby="start-date" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="end-date" className="form-label">End Date</label>
                        <input type="date" className="form-control " id="end-date" aria-describedby="end-date" />
                      </div>
                    </div>
                    <div>
                      <div className="container pe-0">
                        <div className="row mb-2 ">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div>Description</div>
                            <div>(Min 30 char - Max 10000 char)</div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <textarea className="p-3 rounded-3" required minLength={30} maxLength={10000} rows={5} placeholder="Enter your text here.."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer border-top-0" >
                <div className="container">
                  <div className="row float-end">
                    {/* <div className="col-lg-7">
                      <button type="button" className="btn btn-brand-color mx-2 my-2">Delete Experience</button>
                    </div> */}
                    <div className="col-lg-12 ">
                      <button type="submit" className="btn btn-brand-color my-2 mx-2 px-3">Save & Add another</button>
                      <button type="button" className="btn btn-outline-secondary my-2 px-3" >Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Edit Experience Modal */}


        <div className="modal fade" id="editExperienceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Experience</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="jobTitle" className="form-label">Job Title</label>
                      <input type="text" className="form-control" id="jobTitle" aria-describedby="jobTitle" placeholder="Enter your Job" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">Company Name</label>
                      <input type="text" className="form-control pb-4" id="companyName" aria-describedby="companyName" placeholder="Enter your Company name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input type="text" className="form-control pb-4" id="location" aria-describedby="location" placeholder="Enter your Location" />
                    </div>
                    <div className="row justify-content-between mb-3">
                      <div className="col-lg-6">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input type="date" className="form-control " id="start-date" aria-describedby="start-date" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="end-date" className="form-label">End Date</label>
                        <input type="date" className="form-control " id="end-date" aria-describedby="end-date" />
                      </div>
                    </div>
                    <div>
                      <div className="container pe-0">
                        <div className="row mb-2 ">
                          <div className="col-lg-12 d-flex justify-content-between ">
                            <div>Description</div>
                            <div>(Min 30 char - Max 10000 char)</div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <textarea className="p-3 rounded-3" required minLength={30} maxLength={10000} rows={5} placeholder="Enter your text here.."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer  border-top-0 me-2" >
                <button type="submit" className="btn btn-brand-color px-3">Save</button>
                <button type="button" className="btn btn-outline-secondary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#deleteExperienceModal">Delete</button>
              </div>



            </div>
          </div>
        </div>
        <div className="modal fade" id="deleteExperienceModal" aria-hidden="true" aria-labelledby="deleteExperienceModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="deleteExperienceModal">Delete Experience</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-4">
                      Are you sure to delete this experience?
                      <div className="text-center pt-4">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                          {/* <ImCancelCircle className="me-2 fs-4" /> */}

                          <span>Cancel</span>
                        </button>
                        <button type="button" className="btn btn-brand-color mx-3 upload-btn" data-bs-dismiss="modal">
                          {/* <MdDelete className="me-2 fs-4" /> */}
                          <label className="custom-file-label upload-btn" onClick={() => setVideoFile(false)}>Delete</label>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
        </div>





        {/* Add Education Modal */}


        <div className="modal fade" id="addEducationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Education</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="institution" className="form-label">Institution Name</label>
                      <input type="text" className="form-control" id="institution" aria-describedby="institution" placeholder="Enter your College Name or School Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="degree" className="form-label">Degree</label>
                      <input type="text" className="form-control pb-4" id="degree" aria-describedby="degree" placeholder="Enter your Degree" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fieldOfStudy" className="form-label">Field of Study</label>
                      <input type="text" className="form-control pb-4" id="fieldOfStudy" aria-describedby="fieldOfStudy" placeholder="Enter your Field of study" />
                    </div>
                    <div className="row justify-content-between mb-3">
                      <div className="col-lg-6">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input type="date" className="form-control " id="start-date" aria-describedby="start-date" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="end-date" className="form-label">End Date</label>
                        <input type="date" className="form-control " id="end-date" aria-describedby="end-date" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="grade" className="form-label">Grade</label>
                      <input type="text" className="form-control pb-4" id="grade" aria-describedby="grade" placeholder="Enter your Grade" />
                    </div>
                    <div>
                      <div className="container pe-0">
                        <div className="row mb-2 mt-3">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div>Description</div>
                            <div>(Min 30 char - Max 10000 char)</div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <textarea className="p-3 rounded-3" rows={3} placeholder="Enter your text here.."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer border-top-0" >
                <div className="container">
                  <div className="row float-end">
                    {/* <div className="col-lg-7">
                      <button type="button" className="btn btn-brand-color mx-2 my-2">Delete Education</button>
                    </div> */}
                    <div className="col-lg-12 ">
                      <button type="submit" className="btn btn-brand-color my-2 mx-2 px-3">Save & Add another</button>
                      <button type="button" className="btn btn-outline-secondary my-2 px-3" >Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* Edit Education Modal */}


        <div className="modal fade" id="editEducationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Education</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="institution" className="form-label">Institution Name</label>
                      <input type="text" className="form-control" id="institution" aria-describedby="institution" placeholder="Enter your College Name or School Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="degree" className="form-label">Degree</label>
                      <input type="text" className="form-control pb-4" id="degree" aria-describedby="degree" placeholder="Enter your Degree" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fieldOfStudy" className="form-label">Field of Study</label>
                      <input type="text" className="form-control pb-4" id="fieldOfStudy" aria-describedby="fieldOfStudy" placeholder="Enter your Field of study" />
                    </div>
                    <div className="row justify-content-between mb-3">
                      <div className="col-lg-6">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input type="date" className="form-control " id="start-date" aria-describedby="start-date" />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="end-date" className="form-label">End Date</label>
                        <input type="date" className="form-control " id="end-date" aria-describedby="end-date" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="grade" className="form-label">Grade</label>
                      <input type="text" className="form-control pb-4" id="grade" aria-describedby="grade" placeholder="Enter your Grade" />
                    </div>
                    <div>
                      <div className="container">
                        <div className="row mb-2 mt-3">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div>Description</div>
                            <div>(Min 30 char - Max 10000 char)</div>
                          </div>
                        </div>
                        <div className="container pe-0">
                          <div className="row">
                            <textarea className="p-3 rounded-3" rows={3} placeholder="Enter your text here.."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer  border-top-0 me-2" >
                <button type="submit" className="btn btn-brand-color px-3">Save</button>
                <button type="button" className="btn btn-outline-secondary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#deleteEducationModal">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deleteEducationModal" aria-hidden="true" aria-labelledby="deleteEducationModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="deleteEducationModal">Delete Education</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-4">
                      Are you sure to delete this education details?
                      <div className="text-center pt-4">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                          {/* <ImCancelCircle className="me-2 fs-4" /> */}

                          <span>Cancel</span>
                        </button>
                        <button type="button" className="btn btn-brand-color mx-3 upload-btn" data-bs-dismiss="modal">
                          {/* <MdDelete className="me-2 fs-4" /> */}
                          <label className="custom-file-label upload-btn" onClick={() => setVideoFile(false)}>Delete</label>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
        </div>




        {/* Add Skill Modal */}


        <div className="modal fade" id="addSkillModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Skill</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="row justify-content-between mb-3 align-items-center">
                      <div className="col-lg-5">
                        <label className="form-label">Skill</label>
                        <div className="dropdown custom-dropdown">
                          <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false"  >
                            {skillsObj.skillName === "" ? "Select your Skill" : skillsObj.skillName}
                          </button>
                          <ul className="dropdown-menu" >
                            {
                              skillsData.map((skill) => {
                                return (
                                  <React.Fragment key={skill.id}>
                                    <li onClick={() => handleSkillName(skill.skillName)}><a className="dropdown-item" >{skill.skillName}</a></li>
                                  </React.Fragment>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="dropdown custom-dropdown mt-3 mb-3">
                          <label className="form-label">Skill Level</label>
                          <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {skillsObj.skillLevel === "" ? "Select your Skill Level" : skillsObj.skillLevel}
                          </button>
                          <ul className="dropdown-menu" >
                            <li onClick={() => handleSkillLevel("Beginner")}><a className="dropdown-item" >Beginner</a></li>
                            <li onClick={() => handleSkillLevel("Intermediate")}><a className="dropdown-item" >Intermediate</a></li>
                            <li onClick={() => handleSkillLevel("Professional Working Efficiency")}><a className="dropdown-item" >Professional Working Efficiency</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <button type="button" className="btn btn-brand-color" onClick={() => handleAddSkill(skillsObj.skillName, skillsObj.skillLevel)}>Add Skill</button>
                      </div>
                    </div>


                    <div className="mb-3">
                      <label htmlFor="grade" className="form-label">Skills</label>
                      <table className="table">
                        <tbody>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon fw-lighter" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </form>
                </div>
              </div>
              <div className="modal-footer border-top-0" >
                <div className="container">
                  <div className="row float-end">
                    {/* <div className="col-lg-7">
                      <button type="button" className="btn btn-brand-color mx-2 my-2">Delete Skill</button>
                    </div> */}
                    <div className="col-lg-12 d-flex justify-content-between">
                      <button type="button" className="btn btn-brand-color my-2 mx-2 px-3">Save</button>
                      {/* <button type="button" className="btn btn-outline-secondary my-2 px-3">Save</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Edit Skill Modal */}


        <div className="modal fade" id="editSkillModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Skill</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <table className="table">
                        <tbody>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon fw-lighter" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Python</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </form>
                </div>
              </div>
              <div className="modal-footer  border-top-0 me-2" >
                <button type="submit" className="btn btn-brand-color px-3">Save</button>
                {/* <button type="button" className="btn btn-outline-secondary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#deleteSkillModal">Delete</button> */}
              </div>
            </div>
          </div>
        </div>





        {/* Edit Preference Modal */}

        <div className="modal fade" id="editPreference" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Preference</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row mb-2 mt-3">
                    <div className="col-lg-12 d-flex justify-content-between">
                      <div>Description</div>
                      <div>(Min 30 char - Max 10000 char)</div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <textarea className="p-3 rounded-3" rows={15} placeholder="Enter your text here.."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="container">
                  <button type="button" className="btn btn-brand-color w-100 my-2">Save</button>
                  <button type="button" className="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Video upload Modal */}

        <div className="modal fade" id="videoUploadModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Video Upload</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeVideoModel"></button>
              </div>
              <div className="modal-body">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="w-100">
                      <div className="text-center position-relative">
                        <div className="col-lg-12">
                          <div className="card border-0 h-100 rounded-4">
                            <div className="card-body d-flex align-items-center justify-content-center">
                              <div
                                className="border rounded-5 py-5"
                                onClick={() =>
                                  document.getElementById("introduction-video").click()
                                }
                              >
                                <input
                                  type="file"
                                  className="form-control"
                                  id="introduction-video"
                                  hidden
                                  accept="video/mp4,video/x-m4v,video/*"
                                  onChange={handleVideoUpload}
                                  onClick={() => document.getElementById("closeVideoModel").click()}
                                />
                                <div className="text-center">
                                  <div className="fs-2">
                                    <LuUpload />
                                  </div>
                                  <p className="px-5 m-0 pt-5">Drag and drop or click here to upload Video</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  



        {/* Edit Video Modal */}

        <div className="modal fade" id="editVideoModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Edit Video</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card border-0 h-100 rounded-4">
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="w-100">
                      <div className="text-center position-relative">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="avatar-xxl rounded-4"
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="text-center pt-4">
                        <button type="button" htmlFor="fileInput" className="btn btn-brand-color mx-3 upload-btn" onClick={() => document.getElementById("profile-photo").click()}>
                          <HiOutlineUpload className="me-2 fs-4" />
                          <input type="file" id="profile-photo" hidden className="form-control" onChange={handleProfilePhotoUpload} />
                          <span>Upload New Video</span>
                        </button>
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteVideoModal" >
                          <MdDelete className="me-2 fs-4" />
                          <span >Delete Video</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deleteVideoModal" aria-hidden="true" aria-labelledby="deleteVideoModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="deleteVideoModal">Delete Video</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center pb-4">
                Are you sure to delete this video?
                <div className="text-center pt-4">
                  <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                    {/* <ImCancelCircle className="me-2 fs-4" /> */}

                    <span>Cancel</span>
                  </button>
                  <button type="button" className="btn btn-brand-color mx-3 upload-btn" data-bs-dismiss="modal">
                    {/* <MdDelete className="me-2 fs-4" /> */}
                    <label className="custom-file-label upload-btn" onClick={() => setVideoFile(false)}>Delete</label>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Add Language Modal */}


        <div className="modal fade" id="addLanguageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Language</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="row justify-content-between mb-3 align-items-center">
                      <div className="col-lg-5">
                        <label className="form-label">Language</label>
                        <div className="dropdown custom-dropdown">
                          <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false"  >
                            {languagesObj.languageName === "" ? "Select your Language" : languagesObj.languageName}
                          </button>
                          <ul className="dropdown-menu" >
                            {
                              languagesData.map((language) => {
                                return (
                                  <React.Fragment key={language.id}>
                                    <li onClick={() => handleLanguageName(language.languageName)}><a className="dropdown-item" >{language.languageName}</a></li>
                                  </React.Fragment>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="dropdown custom-dropdown mt-3 mb-3">
                          <label className="form-label">Language Level</label>
                          <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {languagesObj.languageLevel === "" ? "Select your Language Level" : languagesObj.languageLevel}
                          </button>
                          <ul className="dropdown-menu" >
                            <li onClick={() => handleLanguageLevel("Beginner")}><a className="dropdown-item" >Beginner</a></li>
                            <li onClick={() => handleLanguageLevel("Intermediate")}><a className="dropdown-item" >Intermediate</a></li>
                            <li onClick={() => handleLanguageLevel("Professional Working Efficiency")}><a className="dropdown-item" >Professional Working Efficiency</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <button type="button" className="btn btn-brand-color" onClick={() => handleAddLanguage(languagesObj.languageName, languagesObj.languageLevel)}>Add</button>
                      </div>
                    </div>


                    <div className="mb-3">
                      <label htmlFor="grade" className="form-label">Languages</label>
                      <table className="table">
                        <tbody>
                          <tr className="text-center">
                            <td>English</td>
                            <td>-</td>
                            <td>Professional Working Efficiency</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon fw-lighter" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Tamil</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Malayalam</td>
                            <td>-</td>
                            <td>Basic</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>
                          <tr className="text-center">
                            <td>Japanese</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            {/* <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td> */}
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </form>
                </div>
              </div>
              <div className="modal-footer border-top-0" >
                <div className="container">
                  <div className="row float-end">
                    {/* <div className="col-lg-7">
                      <button type="button" className="btn btn-brand-color mx-2 my-2">Delete Language</button>
                    </div> */}
                    <div className="col-lg-12 d-flex justify-content-between">
                      <button type="button" className="btn btn-brand-color my-2 mx-4 px-3">Save</button>
                      {/* <button type="button" className="btn btn-outline-secondary my-2 px-3">Save</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Edit Language Modal */}


        <div className="modal fade" id="editLanguageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Language</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <table className="table">
                        <tbody>
                          <tr className="text-center">
                            <td>English</td>
                            <td>-</td>
                            <td>Professional Working Efficiency</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon fw-lighter" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Tamil</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Malayalam</td>
                            <td>-</td>
                            <td>Basic</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td>Japanese</td>
                            <td>-</td>
                            <td>Intermediate</td>
                            <td className="text-center">
                              <span className="mx-3"><FiEdit className="fs-4 react-icon" /></span>
                              <span><LuTrash className="fs-4 react-icon" /></span>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </form>
                </div>
              </div>
              <div className="modal-footer  border-top-0" >
                <button type="submit" className="btn btn-brand-color me-4 px-3">Save</button>
              </div>
            </div>
          </div>
        </div>


        {/* Additional Information Modal */}

        <div className="modal fade" id="additionalInformationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Additional Information</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row mb-2 mt-3">
                    <div className="col-lg-12 d-flex justify-content-between">
                      <div>Description</div>
                      <div>(Min 30 char - Max 10000 char)</div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <textarea className="p-3 rounded-3" rows={15} placeholder="Enter your text here.."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="container">
                  <button type="button" className="btn btn-brand-color w-100 my-2">Save</button>
                  <button type="button" className="btn btn-outline-secondary w-100" data-bs-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Add Social Link Modal */}


        <div className="modal fade" id="addSocialLinkModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Social Link</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="institution" className="form-label">Social Media Name</label>
                      <input type="text" className="form-control" id="institution" aria-describedby="institution" placeholder="Enter Social Media" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="degree" className="form-label">URL</label>
                      <input type="text" className="form-control pb-4" id="degree" aria-describedby="degree" placeholder="Enter URL" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer border-top-0" >
                <div className="container">
                <div className="row float-end">
                    {/* <div className="col-lg-7">
                      <button type="button" className="btn btn-brand-color mx-2 my-2">Delete Social Link</button>
                    </div> */}
                    <div className="col-lg-12 ">
                      <button type="submit" className="btn btn-brand-color my-2 mx-2 px-3">Save & Add another</button>
                      <button type="button" className="btn btn-outline-secondary my-2 px-3" >Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







        {/* Edit Social Link Modal */}


        <div className="modal fade" id="editSocialLinkModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-2">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Social Link</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-bottom-0">
                <div className="container">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="institution" className="form-label">Social Media Name</label>
                      <input type="text" className="form-control" id="institution" aria-describedby="institution" placeholder="Enter Social Media" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="degree" className="form-label">URL</label>
                      <input type="text" className="form-control pb-4" id="degree" aria-describedby="degree" placeholder="Enter URL" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer  border-top-0 me-2" >
                <button type="submit" className="btn btn-brand-color px-3">Save</button>
                <button type="button" className="btn btn-outline-secondary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#deleteSocialLinkModal">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="deleteSocialLinkModal" aria-hidden="true" aria-labelledby="deleteSocialLinkModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="deleteSocialLinkModal">Delete Social Link</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center pb-4">
                      Are you sure to delete this social link details?
                      <div className="text-center pt-4">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                          {/* <ImCancelCircle className="me-2 fs-4" /> */}

                          <span>Cancel</span>
                        </button>
                        <button type="button" className="btn btn-brand-color mx-3 upload-btn" data-bs-dismiss="modal">
                          {/* <MdDelete className="me-2 fs-4" /> */}
                          <label className="custom-file-label upload-btn" onClick={() => setVideoFile(false)}>Delete</label>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
        </div>


      </section>
    </>
  );
};

export default Profile;