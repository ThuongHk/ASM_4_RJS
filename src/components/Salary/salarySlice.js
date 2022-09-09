import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const salarySlice = createSlice({
    name: 'salarySlice',
    initialState: {
        salary: [],
        status: 'idle'
    },
    reducers: {
        salaryFilter: (state, action)=>{
            state.status = 'idle'
            state.salary = action.payload
        }
    },

    extraReducers: builder => {
        builder
        .addCase(getSalary.fulfilled, (state, action)=>{
            state.status = 'success'
            state.salary = action.payload
        })

    }

})

export const getSalary = createAsyncThunk('salary/getSalary', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/staffsSalary');
    const data = await res.json()
    return data
})


export default salarySlice;