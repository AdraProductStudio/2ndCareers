import React, { useEffect, useRef, useState } from "react";
import Images from "../../utils/images.js";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const DashboardNavbar = ({ dashboadMenus, profileImage, profileName }) => {

  const [open, setOpen] = useState(false);
  let notifyRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.notify-closet')) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [])




  return (
    <div className="navbar-height">
      <nav className="navbar navbar-light bg-white fixed-top navbar-expand-md shadow-sm p-2 justify-content-center ">
        <div className="container-fluid">
          <a className="navbar-brand d-flex w-50 me-auto " href="#">
            <img
              src={Images.logo}
              alt="No Logo"
              className="img-responsive logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item navigation-header-link-active">
                <NavLink to="/home/all" className="nav-link px-4" data-testid="Home">
                  {dashboadMenus[0]}
                </NavLink>
              </li>
              <li
                className="nav-item navigation-header-link-active"
                data-testid="Learning"
              >
                <NavLink
                  to="/learning"
                  className="nav-link px-4"
                  data-testid="learning"
                >
                  {dashboadMenus[1]}
                </NavLink>
              </li>
              <li
                className="nav-item navigation-header-link-active"
                data-testid="Community"
              >
                <NavLink
                  to="/community"
                  className="nav-link px-4"
                  data-testid="community"
                >
                  {dashboadMenus[2]}
                </NavLink>
              </li>
            </ul>

            <ul className="nav navbar-nav ms-auto w-100 justify-content-end align-items-center">
              <li className="nav-item position-relative pe-4 notify-closet" ref={notifyRef}>
                <span className="nav-link position-relative bell-icon notify-closet" data-testid="Bell" onClick={() => setOpen(!open)}>
                  <MdNotificationsActive className="fs-4 notify-closet" />
                  <span className="notify-closet notification-bell-count position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    4
                  </span>
                </span>

                {/* notification  */}
                <div className={`${open ? 'notification-box rounded-4 shadow-lg notify-closet' : 'd-none'}`}>
                  <div className="container">
                    {/* notification header  */}
                    <div className="notification-header row align-items-center sticky-top p-3">
                      <div className="col">
                        <h6 className="m-0 fw-bold">Notification</h6>
                      </div>
                      <div className="col text-end">
                        <button className="btn btn-sm border-0">clear</button>
                      </div>
                    </div>

                    {/* notification body */}
                    <div className="notification-body row g-2 p-3">

                      <div className="notification-content-box p-3 rounded-4">

                        <div className="notification-content-header row align-items-center">
                          <div className="col">
                            <h5 className="m-0">Title</h5>
                          </div>
                          <div className="col text-end">
                            <button className="btn btn-sm btn-transparent border-0">
                              <IoIosCloseCircleOutline className="fs-4" />
                            </button>
                          </div>
                        </div>

                        <div className="notification-content-text pt-2">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos mollitia maxime ab itaque iste, pariatur, quas natus obcaecati et esse</p>
                        </div>

                        <div className="notification-content-footer text-end">
                          <span className="pe-2">2 mins ago</span>
                        </div>
                      </div>

                      <div className="notification-content-box p-3 rounded-4">

                        <div className="notification-content-header row align-items-center">
                          <div className="col">
                            <h5 className="m-0">Title</h5>
                          </div>
                          <div className="col text-end">
                            <button className="btn btn-sm btn-transparent border-0">
                              <IoIosCloseCircleOutline className="fs-4" />
                            </button>
                          </div>
                        </div>

                        <div className="notification-content-text pt-2">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos mollitia maxime ab itaque iste, pariatur, quas natus obcaecati et esse</p>
                        </div>

                        <div className="notification-content-footer text-end">
                          <span className="pe-2">2 mins ago</span>
                        </div>
                      </div>

                      <div className="notification-content-box p-3 rounded-4">

                        <div className="notification-content-header row align-items-center">
                          <div className="col">
                            <h5 className="m-0">Title</h5>
                          </div>
                          <div className="col text-end">
                            <button className="btn btn-sm btn-transparent border-0">
                              <IoIosCloseCircleOutline className="fs-4" />
                            </button>
                          </div>
                        </div>

                        <div className="notification-content-text pt-2">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos mollitia maxime ab itaque iste, pariatur, quas natus obcaecati et esse</p>
                        </div>

                        <div className="notification-content-footer text-end">
                          <span className="pe-2">2 mins ago</span>
                        </div>
                      </div>

                      <div className="notification-content-box p-3 rounded-4">

                        <div className="notification-content-header row align-items-center">
                          <div className="col">
                            <h5 className="m-0">Title</h5>
                          </div>
                          <div className="col text-end">
                            <button className="btn btn-sm btn-transparent border-0">
                              <IoIosCloseCircleOutline className="fs-4" />
                            </button>
                          </div>
                        </div>

                        <div className="notification-content-text pt-2">
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos mollitia maxime ab itaque iste, pariatur, quas natus obcaecati et esse</p>
                        </div>

                        <div className="notification-content-footer text-end">
                          <span className="pe-2">2 mins ago</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>


              <li className="nav-item dropdown navbar-dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profileImage}
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                    data-testid="Profile"
                  />
                  {profileName}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="navbarScrollingDropdown"
                  data-testid="ProfileCard"
                >
                  <li>
                    <NavLink
                      to="/home/all/profile"
                      className="dropdown-item header-dropdown"
                      data-testid="profile"
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown" href="#">
                      Contact 2nd Careers
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      to="/pricing-plan"
                      className="dropdown-item header-dropdown"
                      data-testid="upgrade"
                    >
                      Upgrade
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="dropdown-item header-dropdown"
                      data-testid="logout"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default DashboardNavbar;
