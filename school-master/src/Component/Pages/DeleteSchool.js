import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSchoolAction } from "../../Action/SchoolAction";


export const DeleteSchool = (props) => {
  const[state,setState] = useState(
      {
        id:props.id,
        name:"",
        about:"",
        location:"",
        contactNo:0,
        distance:"",
        emailId:"",
        free:"",
        affilation:"",
        rating:"",
        website:""
      }
  )
  const dispatch = useDispatch();
  console.log(state);
  const deleteSchools = async () => {
    const result= await axios
      .delete(`http://localhost:8777/school/delete/${props.id}`).then(alert("Deleted Successfully"));
    dispatch(deleteSchoolAction(result.data));
  };

  return (
    <div className="container">
      <div className="row">
        <form>
          <h2 className="text-center">do you want to delete it ? </h2>
          <div className="text-center">
            <button
              className="btn btn-primary  w-25"
              onClick={() => {
                deleteSchools();
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary ms-5 w-25"
              onClick={() => props.setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

