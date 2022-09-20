import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {STAFFS, DEPARTMENTS} from './staffs';

const staffSlice = createSlice({
  // const {DEPARTMENTS, STAFFS} = staffs
  name: "Staff",
  initialState: {
    status: "idle",
    searchStaff: "",
    allStaff: [],
    department: [],
  },
  reducers: {
    searchStaff: (state, action) => {
      state.searchStaff = action.payload;
    },
    addStaff: (state, action) => {
      state.allStaff.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStaff.fulfilled, (state, action) => {
        state.status = "success";
        state.allStaff = action.payload;
      })
      .addCase(addStaff.fulfilled, (state, action) => {
        state.status = "success";
        state.allStaff = action.payload
      })
      .addCase(editStaff.fulfilled, (state, action) => {
        state.status = "success";
        state.allStaff = action.payload
      })
      .addCase(delStaff.fulfilled, (state, action) => {
        state.status = "success";
        state.allStaff = action.payload;
        // const newStaff = state.allStaff.filter(sat => sat.id !== staffId)
        // state.allStaff = newStaff
      });
  },
});
//  Promise là một Object chứa giá trị tương lai của hoạt động không đồng bộ. 
// Từ khóa async sẽ tự động tạo Promise mới và trả về kết quả trong hàm của nó
export const getStaff = createAsyncThunk("staff/getStaff", async () => {
  // Từ khóa await giúp chúng ta không phải viết khối .then ().
  // Kết quả của yêu cầu GET có sẵn trong biến res.
  // trả về nó giống như trong một hàm đồng bộ thông thường.
  const res = await fetch("https://nodejstesthatn.herokuapp.com");
  const data = await res.json();
  return data;
});
export const addStaff = createAsyncThunk("staff/addStaff", async (newStaff) => {
  console.log(newStaff);
  // Gửi thông tin newStaff lên server bằng method POST, server nhận đc và trả về list staff mới 
  // có thêm một staff mới
  const res = await fetch("https://nodejstesthatn.herokuapp.com/staffs", {
    method: "POST",
    body: JSON.stringify(newStaff),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  return data;
});

export const editStaff = createAsyncThunk("staff/editStaff", async (staff) => {
  console.log(staff);
  // Gửi thông tin nhân viên cần chỉnh sửa lên server bằng method PATCH, server sau đó trả về list staff mới
  //  đã chỉnh sửa rồi mới cho vào kho action.payload 
  const res = await fetch(`https://nodejstesthatn.herokuapp.com/staffs`, {
    method: "PATCH",
    body: JSON.stringify(staff),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
  return data;
});

export const delStaff = createAsyncThunk("staffs/delStaff", async (staffId) => {
  const res = await fetch(`https://rjs101xbackend.herokuapp.com/staffs/${staffId}`, {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
  }).then(data => data.json())

  return res
  

});

export default staffSlice;
