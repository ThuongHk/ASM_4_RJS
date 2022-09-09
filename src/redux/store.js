import {configureStore} from '@reduxjs/toolkit';
import departmentSlice from '../components/Department/departmentSlice';
import salarySlice from '../components/Salary/salarySlice';
import staffSlice from '../components/Staff/staffSlice';


const store = configureStore({
    reducer: {
        staffList: staffSlice.reducer,
        departmentList: departmentSlice.reducer,
        salaryList: salarySlice.reducer
    }
})
export default store;