import React from "react";
import JobDescription from "./JobDescription";
import Logo from "../../assets/images/company.png";
import { FaSave } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

const JobWorkSpace = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-1 setting-row-height p-3 overflow-hidden">

        <div className="h-100 col-12 col-lg-6 overflow-scroll d-flex">
          <Outlet/>
        </div>

        <div className="d-none d-lg-inline col-lg-6 h-100 overflow-scroll">
          <div className="card w-100 border-0 bg-transparent ">
            <div className="card-body p-0 ">
              <div className="col-12 JobDescription-sticky-top-height bg-white rounded-4">
                <div className="d-flex align-items-center my-2">
                  <div className="flex-shrink-0 ms-2">
                    <img src={Logo} alt="..." width={52} height={52} />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h3 className="job-heading" data-testid='DataQualityManager'>Data Quality Manager</h3>
                    <p className="job-posted-on m-0">Posted on 22 Mar 2024</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-auto ms-5 p-2">
                    <button className="btn btn-brand-color ms-3" data-testid="ApplyNow"
                    >Apply Now</button>
                  </div>
                  <div className="p-2">
                    <button type="button" className="btn btn-outline-secondary" data-testid="Save">
                      <FaSave /> Save
                    </button>
                  </div>
                  <div className="p-2">
                    <button type="button" className="btn btn-outline-secondary" data-testid="Share">
                      <FaShare /> Share
                    </button>
                  </div>
                </div>
              </div>

              <JobDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobWorkSpace;
