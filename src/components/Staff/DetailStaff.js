import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import dateFormat from "dateformat";
// import { STAFFS } from "./staffs";
import EditStaff from "./EditStaff";
import { useDispatch, useSelector } from "react-redux";
import {
  listStaffSelector,
  listDepartmentSelector,
} from "../../redux/selector";
import { getDepartment } from "../Department/departmentSlice";

function DetailStaff(props) {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);
  const staffDetail = useSelector(listStaffSelector);
  const staffDepartment = useSelector(listDepartmentSelector);

  const staffInfo = staffDetail.find(
    (staff) => staff.id.toString() === params.id
  );

  return (
    <div className="container mt-5">
      <Link to="/staff">NHÂN VIÊN</Link> / <span>{staffInfo?.name}</span>
      <br />
      <br />
      {
        <div className="col-sm-6 col-md-6 mb-4">
          <Card>
            <div className="row">
              <div className="col-6">
                <CardImg
                  width="auto"
                  height="100%"
                  src={staffInfo?.image}
                  alt={staffInfo?.name}
                />
              </div>
              <div className="col-6">
                <CardBody>
                  <CardTitle>
                    <b>Họ và tên:</b> {staffInfo?.name}
                  </CardTitle>
                  <CardText>
                    <b>Ngày sinh:</b> {dateFormat(staffInfo?.doB, "dd/mm/yyyy")}
                  </CardText>
                  <CardText>
                    <b>Ngày vào công ty:</b>{" "}
                    {dateFormat(staffInfo?.startDate, "dd/mm/yyyy")}
                  </CardText>
                  <CardText>
                    <b>Phòng ban:</b>{" "}
                    {staffDepartment.map((dep) => {
                      if (dep.id === staffInfo?.departmentId) {
                        return <b>{dep.name}</b>;
                      }
                    })}
                  </CardText>
                  <CardText>
                    <b>Số ngày nghỉ còn lại:</b> {staffInfo?.annualLeave}
                  </CardText>
                  <CardText>
                    <b>Số ngày đã làm thêm:</b> {staffInfo?.overTime}
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Card>

          <EditStaff staffEdit={staffInfo} />
        </div>
      }
    </div>
  );
}

export default DetailStaff;
