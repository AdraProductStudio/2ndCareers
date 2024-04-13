import React from 'react'
import JobCard from '../../../layouts/dummyhome/JobCard'

const HomeRecommended = () => {
  return (
    <>
        <div className="col-lg-12 h-100 overflow-scroll">
                <div className="d-flex justify-content-between p-2 align-items-center">
                    <div className="col">
                        <label className="filter-results">Showing : 1275 filtered results</label>
                    </div>
                    <div className="col">
                        <select className="form-select border-0 outline-none filter-section" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="recommended" applicationStatus="ai"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="recommended" applicationStatus="manual"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="recommended" applicationStatus="ai"/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default HomeRecommended
