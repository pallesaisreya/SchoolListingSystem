import React from 'react';
import { useState} from 'react';
import { addSchool } from '../../Action/SchoolAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addSuggestion } from '../../Action/SchoolAction';
import { Container } from '@material-ui/core';

export default function AddSuggestionPage(props) {



    const[state,setState] = useState(
        {
            name:"",
            email:"",
            schoolName:"",
            schoolAddress:"",
            contactNo:"",
            schoolEmailId:"",
            affilation:"",
            about:""
        }
    )

    const dispatch = useDispatch(); 

    const AddSchool = async() =>{
        console.log(state);
        await axios.post("http://localhost:8777/suggestion/addSuggestions",state).then((result) => dispatch(addSuggestion(result.data)));
    }

  return (
  <Container>
  <div className="container">
  <div className="row">
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          NAME
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={state.name || "" }
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      
      <div className="mb-3">
          <label htmlFor="email" className="form-label">
             EMAIL
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={state.email|| ""}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label">
             CONTACT NO
          </label>
          <input
            type="number"
            className="form-control"
            id="contactNo"
            value={state.contactNo || ""}
            onChange={(e) => setState({ ...state,  contactNo: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label">
            SCHOOL NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="schooName"
            value={state.schoolName || ""}
            onChange={(e) => setState({ ...state,schoolName: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <label htmlFor="schoolAddress" className="form-label">
           SCHOOL ADDRESS
        </label>
        <input
          type="text"
          className="form-control"
          id="schoolAdress"
          value={state.schoolAddress || "" }
          onChange={(e) => setState({ ...state, schoolAddress: e.target.value })}
        />
      </div>
        <div className="mb-3">
          <label htmlFor="schoolEmailId" className="form-label">
             SCHOOL EMAIL ID
          </label>
          <input
            type="text"
            className="form-control"
            id="schoolEmailId"
            value={state.schoolEmailId || ""}
            onChange={(e) => setState({ ...state,schoolEmailId: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="affilation" className="form-label">
             AFFILATION
          </label>
          <input
            type="text"
            className="form-control"
            id="affilation"
            value={state.affilation || ""}
            onChange={(e) => setState({ ...state,affilation: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="about" className="form-label">
             ABOUT
          </label>
          <input
            type="text"
            className="form-control"
            id="about"
            value={state.about || ""}
            onChange={(e) => setState({ ...state,about: e.target.value })}
          />
        </div>


      <div className="text-center">
        <button
          className="btn btn-primary  w-25"
          onClick={(event) => {
            AddSchool();
          }}
        >
          Submit
        </button>
        <button
          className="btn btn-secondary ms-5 w-25"
          onClick={() => {
            props.setModalOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
</Container>);
}
