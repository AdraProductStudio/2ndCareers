import React from 'react'
import JobCard from '../../../layouts/dummyhome/JobCard'

const HomeApplied = () => {
    return (
            <div className="col-lg-12 h-100 overflow-scroll p-0">
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
                        <JobCard cardType="applied" applicationStatus="contacted"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="reviewed"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="shortlisted"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="contacted"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="rejected"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="reviewed"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="contacted"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="shortlisted"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="reviewed"/>
                    </div>
                </div>
                <div className="card w-100 mt-2 rounded-4 border-0">
                    <div className="card-body">
                        <JobCard cardType="applied" applicationStatus="contacted"/>
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
    )
}

export default HomeApplied
