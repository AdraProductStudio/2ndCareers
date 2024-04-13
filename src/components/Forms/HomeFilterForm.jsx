import React, { useState } from 'react'
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import FilterLabel from '../Label/FilterLabel';

const HomeFilterForm = () => {
    const [skills, setSkills] = useState("")
    const [sectors, setSectors] = useState("")
    const [location, setLocation] = useState("")
    return (
        <form>
            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Skills"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"skills"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {skills === "" ? "Select your Skill Level" : skills}
                </button>
                <ul className="dropdown-menu" >
                    <li onClick={() => setSkills("Beginner")}><a className="dropdown-item" >Beginner</a></li>
                    <li onClick={() => setSkills("Intermediate")}><a className="dropdown-item" >Intermediate</a></li>
                    <li onClick={() => setSkills("Professional Working Efficiency")}><a className="dropdown-item" >Professional Working Efficiency</a></li>
                </ul>
            </div>
            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Sectors"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"selectors"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {sectors === "" ? "Select your Sector" : sectors}
                </button>
                <ul className="dropdown-menu" >
                    <li onClick={() => setSectors("one")}><a className="dropdown-item" >one</a></li>
                    <li onClick={() => setSectors("two")}><a className="dropdown-item" >two</a></li>
                    <li onClick={() => setSectors("three")}><a className="dropdown-item" >three</a></li>
                </ul>
            </div>
            {/* Checkbox color change code */}
            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Workplace Type</h5>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Hybrid"} id={"workplace_hybrid"} formFieldName={"Hybrid"} formLableFor={"workplace_hybrid"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"On-site"} id={"workplace_on_site"} formFieldName={"On-site"} formLableFor={"workplace_on_site"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Remote"} id={"workplace_remote"} formFieldName={"Remote"} formLableFor={"workplace_remote"} formLableClass={"form-check-label"} />
                </div>
            </div>

            <div className="mb-3 dropdown custom-dropdown">
                <FilterLabel spanContent={"Location"} spanClassName={"job-filter-sub-headings"} labelHtmlFor={"location"} lableClassName={"form-label fs-4 mb-2"} />
                <button className="btn btn-secondary dropdown-toggle w-100" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {location === "" ? "Select your Location" : location}
                </button>
                <ul className="dropdown-menu" >
                    <li onClick={() => setLocation("one")}><a className="dropdown-item" >one</a></li>
                    <li onClick={() => setLocation("two")}><a className="dropdown-item" >two</a></li>
                    <li onClick={() => setLocation("three")}><a className="dropdown-item" >three</a></li>
                </ul>
            </div>
            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Job Type</h5>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Full-time"} id={"job_full-time"} formFieldName={"Full time"} formLableFor={"job_full-time"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Part-time"} id={"job_part_time"} formFieldName={"Part time"} formLableFor={"job_part_time"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Contract"} id={"job_contract"} formFieldName={"Contract"} formLableFor={"job_contract"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Temporary"} id={"job_temporary"} formFieldName={"Temporary"} formLableFor={"job_temporary"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Other"} id={"job_others"} formFieldName={"Others"} formLableFor={"job_others"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Volunteer"} id={"workplace_Volunteer"} formFieldName={"Volunteer"} formLableFor={"workplace_Volunteer"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} id={"workplace_internship"} formFieldName={"Internship"} formLableFor={"workplace_internship"} formLableClass={"form-check-label"} />
                </div>
            </div>
            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Schedule</h5>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Fixed"} id={"schedule_fixed"} formFieldName={"Fixed"} formLableFor={"schedule_fixed"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Flexible"} id={"schedule_flexible"} formFieldName={"Flexible"} formLableFor={"schedule_flexible"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"WeekendOnly"} id={"schedule_weekend_only"} formFieldName={"Weekend only"} formLableFor={"schedule_weekend_only"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"MondaytoFriday"} id={"schedule_monday"} formFieldName={"Monday to Friday"} formLableFor={"schedule_monday"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"UStime"} id={"schedule_us"} formFieldName={"Us time"} formLableFor={"schedule_us"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Indiatime"} id={"schedule_india"} formFieldName={"India time"} formLableFor={"schedule_india"} formLableClass={"form-check-label"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"ScheduleOther"} id={"schedule_other"} formFieldName={"Other"} formLableFor={"schedule_other"} formLableClass={"form-check-label"} />
                </div>
            </div>

            {/* Checkbox color change code */}
            <div>
                <Button buttonType={"button"} className={"btn btn-brand-color w-100"} title={"Apply Filter"} />
            </div>
        </form>
    )
}

export default HomeFilterForm
