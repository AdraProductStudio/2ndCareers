import React, { useState } from 'react'
import JobFilter from '../../../layouts/dummyhome/JobFilter'
import JobCard from '../../../layouts/dummyhome/JobCard'

const HomeAll = () => {
    const [filter,setFilter]=useState("")
    return (
        <>
            <div className="col-lg-4 d-none d-xl-block h-100 overflow-scroll pe-3">
                <div className="card w-100 border-0 rounded-4">
                    <div className="card-body">
                        <JobFilter />
                    </div>
                </div>
            </div>

            <div className="col-12 col-xl-8 h-100 overflow-scroll">
                <div className="d-flex justify-content-between p-2 align-items-center">
                    <div className="col">
                        <label className="filter-results">Showing : 1275 filtered results</label>
                    </div>
                    <div className="col dropdown custom-dropdown">
                        <button className="btn btn-secondary dropdown-toggle w-100 border-0 outline-none filter-section" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {filter === "" ? "Filter" : filter}
                        </button>
                        <ul className="dropdown-menu col" >
                            <li onClick={() => setFilter("one")}><a className="dropdown-item" >one</a></li>
                            <li onClick={() => setFilter("two")}><a className="dropdown-item" >two</a></li>
                            <li onClick={() => setFilter("three")}><a className="dropdown-item" >three</a></li>
                        </ul>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard />
                    </div>
                </div>
                <div className="w-100 mt-3">

                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    5
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    6
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    7
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    8
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    9
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    10
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default HomeAll
