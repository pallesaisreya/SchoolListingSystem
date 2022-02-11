import React from 'react';
import { useState} from 'react';
import { addSchool } from '../../Action/SchoolAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function AddSchoolPage(props) {



    const[state,setState] = useState(
        {
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

    const AddSchool = async() =>{
        console.log(state);
        await axios.post("http://localhost:8777/school/addschool",state).then((result) => dispatch(addSchool(result.data)));
    }

  return (<div className="container">
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
        <label htmlFor="about" className="form-label">
           ABOUT
        </label>
        <input
          type="text"
          className="form-control"
          id="about"
          value={state.about || "" }
          onChange={(e) => setState({ ...state, about: e.target.value })}
        />
      </div>
      <div className="mb-3">
          <label htmlFor="location" className="form-label">
             LOCATION
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={state.location || ""}
            onChange={(e) => setState({ ...state, location: e.target.value })}
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
          <label htmlFor="distance" className="form-label">
             DISTANCE
          </label>
          <input
            type="text"
            className="form-control"
            id="distance"
            value={state.distance || ""}
            onChange={(e) => setState({ ...state,distance: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">
             EMAIL ID
          </label>
          <input
            type="text"
            className="form-control"
            id="emailId"
            value={state.emailId || ""}
            onChange={(e) => setState({ ...state,emailId: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="free" className="form-label">
             FEE
          </label>
          <input
            type="text"
            className="form-control"
            id="free"
            value={state.free || ""}
            onChange={(e) => setState({ ...state,free: e.target.value })}
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
          <label htmlFor="rating" className="form-label">
             RATING
          </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            value={state.rating || ""}
            onChange={(e) => setState({ ...state,rating: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">
             WEBSITE
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            value={state.website || ""}
            onChange={(e) => setState({ ...state,website: e.target.value })}
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
</div>);
}
