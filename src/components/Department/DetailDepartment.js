import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  listDepartmentSelector,
  listStaffSelector,
} from "../../redux/selector";

const DetailDepartment = () => {
  const params = useParams();
  const detailDepartment = useSelector(listDepartmentSelector);
  const detailStaffDepartment = useSelector(listStaffSelector);

  const showDetail = detailDepartment.filter(
    (detail1) => detail1.id === params.departmentId
  );
  const showStaffDepar = detailStaffDepartment.filter(
    (detail2) => detail2.departmentId === params.departmentId
  );

  const showScreenDepartment = showDetail.map((show) => {
    return (
      <div>
        <h5>Nhân Viên Phòng: {show.name}</h5>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">{showScreenDepartment}</div>
      <div className="row">
        {showStaffDepar.map((staff) => {
          return (
            <div className="col-md-2 col-sm-3 col-xs-12" key={staff.id}>
              <Link to={`/staff/${staff.id}`}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={staff.image}
                    alt={staff.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{staff.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailDepartment;
