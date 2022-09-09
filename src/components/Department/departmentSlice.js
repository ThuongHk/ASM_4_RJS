import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
  name: "DepartmentSlice",
  initialState: {
    status: "idle",
    department: [],
  },
  reducers: {
    filterDepartment: (state, action) => {
      state.status = "idle";
      state.department = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDepartment.fulfilled, (state, action) => {
      state.status = "success";
      state.department = action.payload;
    });
  },
});

export const getDepartment = createAsyncThunk(
  "department/getDepartment",
  async () => {
    const res = await fetch("https://rjs101xbackend.herokuapp.com/departments");
    const data = await res.json();
    return data;
  }
);

export default departmentSlice;
