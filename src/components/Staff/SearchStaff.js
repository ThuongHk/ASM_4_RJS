import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import staffSlice from './staffSlice';

function SearchStaff() {
    const [searchStaffInput, setSearchStaffInput] = useState();
    const dispatch = useDispatch();

    const handleOnchangeSearchStaff = (e)=>{
        setSearchStaffInput(e.target.value)
        dispatch(staffSlice.actions.searchStaff(e.target.value))
        // setSearchStaffInput('')
        
    }
   
  
    return (
        <div className='container mb-3'>
            <b>Tìm Kiếm Nhân Viên:  </b><br/>
            <input type='text' placeholder='Nhập tên nhân viên' value={searchStaffInput} onChange={handleOnchangeSearchStaff}/> 
            {/* <button onClick={handleSearch}>Search</button>          */}
           
        </div>
    );
}

export default SearchStaff;