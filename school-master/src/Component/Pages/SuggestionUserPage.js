import React, { Component } from 'react';
import NavBar from '../Layout/NavBar';
import { Container } from '@material-ui/core';
import HOC from './HOC';
import { Button } from '@material-ui/core';

class SuggestionUserPage extends Component {


    render() {
        return (<div>
            <NavBar />
            <Container maxWidth="lg" style={{
                backgroundImage: "url(https://cdn.pixabay.com/photo/2017/10/21/16/23/book-2875123_1280.jpg)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br />
                <br />
                <div className="row mb-5">
                    <div className="pt-4 text-center">
                        <div class="container">
                            <div class="content">
                                <Button onClick={() => this.props.onClickAddFunction()}>
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                    <div class="content-details">
                                        <h3 class="content-title">
                                            NEED TO GIVE SUGGESTION!
                                        </h3>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <Container maxwidth="sm" style={{ textAlign: "center", backgroundColor: 'whitesmoke' }}>
                        <h4>
                            ALL SUGESSTION OF USERS IS AVAILABLE HERE
                        </h4>
                    </Container>
                    <br />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter SchoolName"
                        onChange={
                            this.props.filterBySchoolName
                        }
                    />
                    <br />
                    <br />
                </div>
                <Container maxWidth="md" style={{ overflowX: 'auto' }}>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data &&
                                        this.props.data.map((user) => {
                                            const { id, name, email, schoolName, schoolAddress, contactNo, schoolEmailId, affilation, about } = user;
                                            return (
                                                <tr key={id}>
                                                    <td>{name}</td>
                                                    <td>{schoolName}</td>
                                                    <td>{schoolAddress}</td>
                                                    <td>{about}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-info "
                                                            onClick={() => this.props.onClickViewFunction(id)}
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

        </div>)
    }
}

const EnhancedUserSuggestionPage = HOC(SuggestionUserPage);
export default EnhancedUserSuggestionPage;