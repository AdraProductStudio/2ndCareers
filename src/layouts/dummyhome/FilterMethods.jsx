import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../components/Input/Input";
import InputGroup from "../../components/Input/InputGroup";
import { IoIosSearch } from "react-icons/io";

const FilterMethods = () => {
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  function handleSearchButtonClick() {
    if (search === "") {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className="container-fluid dashboard-menus-container ">
      <div className="row px-3 pt-4">
        <div className="col-lg-6">
          <ul className="nav justify-content-around bg-white m-1 rounded-2 select-category filter-side-butons">
            <li
              className="nav-item navigation-link-active"
              data-testid="All"
            >
              <NavLink to='/home/all' className="nav-link">
                All
              </NavLink>
            </li>
            <li className="nav-item navigation-link-active" data-testid="Recommended">
              <NavLink to="/home/recommended" className="nav-link">
                Recommended
              </NavLink>
            </li>
            <li className="nav-item navigation-link-active" data-testid="Applied">
              <NavLink to="/home/applied" className="nav-link">
                Applied
              </NavLink>
            </li>
            <li className="nav-item navigation-link-active" data-testid="Saved">
              <NavLink to="/home/saved" className="nav-link">
                Saved
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-6">
          <div className="d-flex m-1 position-relative">
            <InputGroup
              className="home-search-icon fs-5"
              reIcons={<IoIosSearch />}
            />

            <Input
              type="text"
              className="form-control form-control-lg searchInput border-0 px-5"
              placeHolder="Seach Company, title"
              ariaLabel="default input example"
              testId="searchResult"
              functionOnchange={handleSearchInput}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMethods;
