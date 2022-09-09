import React, { useEffect } from "react";
// import {DEPARTMENTS} from '../Staff/staffs';
import { useDispatch, useSelector } from "react-redux";
import { listDepartmentSelector } from "../../redux/selector";
import { getDepartment } from "./departmentSlice";
import { Link } from "react-router-dom";

function Department() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartment());
  }, []);

  const departments = useSelector(listDepartmentSelector);

  const departmentList = departments.map(function (department) {
    return (
      <div
        className="col-md-4 col-sm-4 col-xs-12 mb-2 mt-3"
        key={department.id}
      >
        <Link
          to={`/department/${department.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{department.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                Số lượng nhân viên : {department.numberOfStaff}
              </h6>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{departmentList}</div>
    </div>
  );
}

export default Department;
