import React, { useState } from 'react'
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import FilterLabel from '../Label/FilterLabel';

const HomeFilterForm = () => {
    const [skills, setSkills] = useState("")
    const [sectors, setSectors] = useState("")
    const [location,setLocation] = useState("")
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
            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Workplace Type</h5>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Hybrid"} id={"workplace_hybrid"} />
                    <Label htmlFor={"workplace_hybrid"} className={"form-check-label"} title={"Hybrid"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"On-site"} id={"workplace_on_site"} />
                    <Label htmlFor={"workplace_on_site"} className={"form-check-label"} title={"On-site"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Remote"} id={"workplace_remote"} />
                    <Label htmlFor={"workplace_remote"} className={"form-check-label"} title={"Remote"} />
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
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Full-time"} id={"job_full-time"} />
                    <Label htmlFor={"job_full-time"} className={"form-check-label"} title={"Full type"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Part-time"} id={"job_part_time"} />
                    <Label htmlFor={"job_part_time"} className={"form-check-label"} title={"Part time"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Contract"} id={"job_contract"} />
                    <Label htmlFor={"job_contract"} className={"form-check-label"} title={"Contract"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Contract"} id={"job_temporary"} />
                    <Label htmlFor={"job_temporary"} className={"form-check-label"} title={"Temporary"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Other"} id={"job_others"} />
                    <Label htmlFor={"job_others"} className={"form-check-label"} title={"Others"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Volunteer"} id={"workplace_Volunteer"} />
                    <Label htmlFor={"workplace_Volunteer"} className={"form-check-label"} title={"Volunteer"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} id={"workplace_internship"} />
                    <Label htmlFor={"workplace_internship"} className={"form-check-label"} title={"Internship"} />
                </div>
            </div>
            <div className="mb-3">
                <h5 className="job-filter-sub-headings">Schedule</h5>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Fixed"} id={"schedule_fixed"} />
                    <Label htmlFor={"schedule_fixed"} className={"form-check-label"} title={"Fixed"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Flexible"} id={"schedule_flexible"} />
                    <Label htmlFor={"schedule_flexible"} className={"form-check-label"} title={"Flexible"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"WeekendOnly"} id={"schedule_weekend_only"} />
                    <Label htmlFor={"schedule_weekend_only"} className={"form-check-label"} title={"Weekend only"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"MondaytoFriday"} id={"schedule_monday"} />
                    <Label htmlFor={"schedule_monday"} className={"form-check-label"} title={"Monday to Friday"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"UStime"} id={"schedule_us"} />
                    <Label htmlFor={"schedule_us"} className={"form-check-label"} title={"Us time"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"Indiatime"} id={"schedule_india"} />
                    <Label htmlFor={"schedule_india"} className={"form-check-label"} title={"India time"} />
                </div>
                <div className="form-check">
                    <Input className={"form-check-input"} type={"checkbox"} testId={"ScheduleOther"} id={"schedule_other"} />
                    <Label htmlFor={"schedule_other"} className={"form-check-label"} title={"Other"} />
                </div>
            </div>
            <div>
                <Button buttonType={"button"} className={"btn btn-brand-color w-100"} title={"Apply Filter"} />
            </div>
        </form>
    )
}

export default HomeFilterForm
