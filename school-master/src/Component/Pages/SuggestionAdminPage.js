import React, { Component } from 'react';
import NavBar1 from '../Layout/NavBar1';
import { Container } from '@material-ui/core';
import HOC from './HOC';


 class SuggestionAdminPage extends Component {
        

  render() {
    return (<div>
       <NavBar1/>
            <Container maxWidth="lg" style={{
                backgroundImage: "url(https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br />
                <br />
                <div>
                    <Container maxwidth="sm" style={{textAlign:"center",backgroundColor:'whitesmoke'}}>
                       <h4>
                          ALL SUGESSTION OF USERS IS AVAILABLE HERE  
                       </h4>
                    </Container>
                    <br/>
                    <br/>
                    <input
              type="text"
              className="form-control"
              placeholder="Enter SchoolName"
              onChange={
                this.props.filterBySchoolName
              }
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
                                        <th>NAME</th>
                                        <th>SCHOOL NAME</th>
                                        <th>SCHOOL ADDRESS</th>
                                        <th>ABOUT</th>
                                        <th>VIEW</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.props.data&&
                                        this.props.data.map((user) => {
                                            const {id,name,email,schoolName,schoolAddress,contactNo,schoolEmailId,affilation,about} = user;
                                            return (
                                                <tr key={id}>
                                                    <td>{name}</td>
                                                    <td>{schoolName}</td>
                                                    <td>{schoolAddress}</td>
                                                    <td>{about}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-info "
                                                            onClick={()=>this.props.onClickViewFunction(id)}
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                    <td>
                                                    <button
                                                            className="btn btn-outline-danger "
                                                            onClick={()=>this.props.onClickDeleteFunction(id)}
                                                        >
                                                            DELETE
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
            
        </div>)
  }
}

const EnhancedAdminSuggestionPage = HOC(SuggestionAdminPage);
export default EnhancedAdminSuggestionPage;