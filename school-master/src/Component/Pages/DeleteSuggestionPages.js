import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteSchoolAction } from "../../Action/SchoolAction";


export const DeleteSuggestionPages = (props) => {
  
  const dispatch = useDispatch();
  const deleteSuggestion = async () => {
    const result= await axios
      .delete(`http://localhost:8777/suggestion/delete/${props.id}`).then(alert("Deleted Successfully"));
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
                deleteSuggestion();
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
