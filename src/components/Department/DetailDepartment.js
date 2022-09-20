import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  listDepartmentSelector,
  listStaffSelector,
} from "../../redux/selector";

const DetailDepartment = () => {
  const params = useParams();
  // lấy data phòng ban từ server về
  const detailDepartment = useSelector(listDepartmentSelector);
  // lấy ra list nhân viên
  const detailStaffDepartment = useSelector(listStaffSelector);
  
  // Tạm thời cứ chỉ quan tâm tới thằng phòng ban đã, mỗi khi thằng ngoài click vào từng thằng
  //  phòng ban thì nó cho ra tên của một phòng ban, id của thằng phòng ban thì chỉ có một, nó trùng với
  // đường dẫn departmentId của thằng staff
  const showDetail = detailDepartment.find( detail1 => detail1.id.toString() === params.departmentId );

  // Số lượng nhân viên có trong từng phần ban, dưới đây là khi click vào từng thằng phòng ban, thì những 
  //  thằng staff có departmentId trùng với id của thằng phòng ban cũng sẽ show ra vì nó trùng nhau
  const showStaffDepar = detailStaffDepartment.filter(detail2 => detail2.departmentId === params.departmentId  );
  

  return (
    <div className="container-fluid">
      <div className="row"><h6><b>Nhân viên phòng ban: {showDetail?.name}</b></h6></div>
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
