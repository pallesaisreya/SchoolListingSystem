import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getSchool } from '../../Action/SchoolAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ActionTypes } from '../../Action/ActionTypes';

export default function ViewSchool(props) {
    console.log(props.id)
 
    const data = useSelector((state)=>state.AllSchools.schools);
    console.log(data);

    const dispatch = useDispatch();
    

    useEffect(() => {
        fetchInduival();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

   
   const fetchInduival = async() => {
       const result = await axios.get(`http://localhost:8777/school/getSchool/${props.id}`);
        console.log(getSchool(result.data));
       dispatch({
        type:ActionTypes.INDUIVAL_SCHOOLS,
        payload:result.data
    });
       console.log(result.data);
   }



  return (<div>
    <div className="container">
      <div className="row p-5">
        <div className="h4 p-2">id: {data.id}</div>
        <div className=" h4 p-2">name : {data.name}</div>
        <div className="h4 p-2">about : {data.about}</div>
        <div className="h4 p-2">location : {data.location}</div>
        <div className="h4 p-2">contactNo : {data.contactNo}</div>
        <div className="h4 p-2">distance : {data.distance}</div>
        <div className="h4 p-2">emailId : {data.emailId}</div>
        <div className="h4 p-2">fee : {data.free}</div>
        <div className="h4 p-2">affilation : {data.affilation}</div>
        <div className="h4 p-2">rating : {data.rating}</div>
        <div className="h4 p-2">website : {data.website}</div>
        </div>
        </div>
  </div>);
}
