import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container } from '@material-ui/core';
import NavBar from '../Layout/NavBar';
import { getAllSchool } from '../../Action/SchoolAction';
import Modal from '../../CustomModal/Modal';

export default function SchoolListing() {

    const dispatch = useDispatch();

    const [element, setElement] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const[id,setId] = useState(0);

    const school = useSelector((state)=>state.AllSchools.school);

    const[data,setData] = useState(school);

     const fetchingDataList = async() => {
         const result = await axios.get("http://localhost:8777/school/getallschool");
         dispatch(getAllSchool(result.data));
         console.log(result.data);
         setData(result.data);

     }

     useEffect(() => {
        fetchingDataList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []
     )


     const onClickViewFunction = (id) => {
         setElement("view");
         setId(id);
         setModalOpen(true);
     }


     const filterBySchoolName = (event) => {
            const filterUdata =  school.filter((medico)=>
            medico.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setData(filterUdata);
          }
     


    return (
        <div>
            <NavBar/>
            <Container maxWidth="lg" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br />
                <br />
                <div>
                    <Container maxwidth="sm" style={{textAlign:"center",backgroundColor:'whitesmoke'}}>
                       <h4>
                          ALL SCHOOLS AVAILABLE HERE IS 
                       </h4>
                    </Container>
                    <br/>
                    <br/>
                    <input
              type="text"
              className="form-control"
              placeholder="Enter SchoolName"
              onChange={(event) => {
                filterBySchoolName(event);
              }}
            />
            <br/>
            <br/>
                </div>
                <Container maxWidth="md" style={{overflowX:'auto'}}>
                    <div className="conatiner">
                        <div className="row">
                            <table className="table table-dark table-stripped table-hover m-auto">
                                <thead className="table-light ">
                                    <tr className="table-secondary">
                                        <th>ID</th>
                                        <th>SCHOOL NAME</th>
                                        <th>VIEW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { data&&
                                        data.map((user) => {
                                            const {id,name,about,location,contactNo,distance,emailId,free,affilation,rating,website } = user;
                                            return (
                                                <tr key={id}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-info "
                                                            onClick={()=>onClickViewFunction(id)}
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
                <br />
                <br />
            </Container>
            <Modal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        id={id}       
      />
        </div>


    );
}
