import React from "react";
import Modal from "react-modal";
import ViewSchool from "../Component/Pages/ViewSchool";
import AddSchoolPage from "../Component/Pages/AddSchoolPage";
import UpdatePage from "../Component/Pages/UpdatePage";
import {DeleteSchool} from "../Component/Pages/DeleteSchool";
import { DeleteSuggestionPages } from "../Component/Pages/DeleteSuggestionPages";
import AddSuggestionPage from "../Component/Pages/AddSuggestionPage";
import ViewSuggestion from "../Component/Pages/ViewSuggestion";
import { Container } from "@material-ui/core";
import "../Component/Pages/modal.css"

const CustomModal = (props) => {
  console.log(props.id);
  return (
    <div className="container-bg">
    <Modal isOpen={props.status} ariaHideApp={false}>
      <div className="titleCloseBtn ">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            props.setModalOpen(false);
          }}
        >
          {" "}
          X
        </button>
      </div>
      <div>{(() => {
        switch (props.element) {

          case "view":
            return <ViewSchool setModalOpen={props.setModalOpen} id={props.id} />


          case "add":
            return <AddSchoolPage setModalOpen={props.setModalOpen}/>

          
          case "update":
            return <UpdatePage setModalOpen={props.setModalOpen} id={props.id} />

          case "delete":
            return <DeleteSchool setModalOpen={props.setModalOpen} id={props.id} />

          case "deletesuggestions":
            return <DeleteSuggestionPages setModalOpen={props.setModalOpen} id={props.id}/>

          case "addsuggestions":
            return <AddSuggestionPage setModalOpen={props.setModalOpen}/>

          case "viewsuggestion":
            return <ViewSuggestion setModalOpen={props.setModalOpen} id={props.id}/>
            

          default:
            break;
        }
      })()}</div>
    </Modal>
    </div>
  );
};

export default CustomModal;
