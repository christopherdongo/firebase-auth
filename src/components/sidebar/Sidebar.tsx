import React, {forwardRef} from "react";
import {Link, useLocation} from "react-router-dom";
import {RxDashboard} from "react-icons/rx";
import {MdLanguage, MdOutlineCategory} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import {LOGO_URL} from "../constant";

type PropsSidebar = {
  showNav: boolean;
};

export const Sidebar = forwardRef<HTMLDivElement, PropsSidebar>(
  ({showNav}, ref) => {
    const location = useLocation();

    const isActive = (path: string) => {
      return location.pathname === path ? "active" : "";
    };

    return (
      <div
        ref={ref}
        className="d-flex flex-column flex-flex-shrink-0 p-3 text-white bg-dark"
        style={{width: "200px", height: "200vh"}}
      >
        <div className="d-flex justify-content-center mb-4">
          <img
            src={LOGO_URL}
            className="img-fluid"
            alt="company_logo"
            style={{width: "56px"}}
          />
        </div>

        <ul className="nav nav-pills flex flex-column mb-auto text-white">
        <li className="nav-item mb-2 text-white">
                    <small className="  text-uppercase fw-bold d-block text-start text-white">Main Pages</small>
                </li>
          <li className="nav-item">
            <Link
              to="/admin/dashboard"
              className={`nav-link text-white ${isActive("/admin/dashboard")}`}
            >
              <div className="d-flex align-items-center">
                <RxDashboard className="me-3" />
                <span>dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/admin/sectionOne"
            className={`nav-link text-white ${isActive("/admin/sectionOne")}`}
            >
                <div className="d-flex align-items-center">
                    <MdLanguage className="me-3"/>
                    <span>Section 1</span>
                </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/admin/sectionOne"
            className={`nav-link text-white ${isActive("/admin/sectionOne")}`}
            >
                <div className="d-flex align-items-center">
                    <MdOutlineCategory className="me-3"/>
                    <span>Section 2</span>
                </div>
            </Link>
          </li>

          <li className="nav-item mb-2 text-white">
                    <small className="  text-uppercase fw-bold d-block text-start text-white">Main Others</small>
                </li>
                <li className="nav-item">
            <Link
            to="/admin/users"
            className={`nav-link text-white ${isActive("/admin/users")}`}
            >
                <div className="d-flex align-items-center">
                    <FaUsers className="me-3"/>
                    <span>Users</span>
                </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
);
