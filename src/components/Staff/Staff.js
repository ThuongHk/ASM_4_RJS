// import dateFormat from "dateformat";
import { useSelector, useDispatch } from "react-redux";
// import staffSlice from './staffSlice';
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Navbar,
  NavbarBrand,
  CardImg,
  CardText,
} from "reactstrap";
import SearchStaff from "./SearchStaff";
import { showDataListStaff } from "../../redux/selector";
import AddStaff from "./AddStaff";
import { delStaff } from "./staffSlice";

function Staff() {
  const [column, setColumn] = useState("col-2 mt-2");
  const dispatch = useDispatch();

  const showStaff = useSelector(showDataListStaff);
  // const showSearchStaff = useSelector()
  const handleDeleteStaff = (staff) => {
    dispatch(delStaff(staff.id));
  };

  const staffList = showStaff?.map((staff) => {
    return (
      <div className={column} key={staff.id}>
        <button
          className="btn btn-warning btn-sm close2"
          title="xóa"
          onClick={() => handleDeleteStaff(staff)}
        >
          <span className="span1">&times; </span>{" "}
        </button>
        <Link to={`/staff/${staff.id}`}>
          <Card style={{ backgroundColor: "#C6E5EE", cursor: "pointer" }}>
            <CardImg src={staff.image} alt={staff.name} />
            <CardBody>
              <CardTitle className="text-center">{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className="container">
      {/* <div className='d-flex justify-content-center m-2'> */}
      <div className="text-center">
        <h6 className="text-danger">Chọn cột hiển thị</h6>
        <button
          className="bg-warning text-danger btn btn-info btn-sm mr-2"
          onClick={() => {
            setColumn(" col-6 mt-2");
          }}
        >
          2
        </button>
        <button
          className="bg-warning text-danger btn btn-info btn-sm mr-2"
          onClick={() => {
            setColumn(" col-4  mt-2");
          }}
        >
          3
        </button>
        <button
          className="bg-warning text-danger btn btn-info btn-sm mr-2"
          onClick={() => {
            setColumn(" col-3  mt-2");
          }}
        >
          4
        </button>
        <button
          className="bg-warning text-danger btn btn-info btn-sm mr-2"
          onClick={() => {
            setColumn(" col-2  mt-2");
          }}
        >
          6
        </button>
      </div>
      <div className="row" style={{ display: "flex" }}>
        <SearchStaff />
        <AddStaff />
      </div>
      {/* </div> */}
      <div className="row">{staffList}</div>
    </div>
  );
}

export default Staff;
