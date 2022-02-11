import React from "react"
import { suggestionAction } from "../../Action/SchoolAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { Container } from "@material-ui/core";
import axios from "axios";
import Modal from '../../CustomModal/Modal';


const HOC = (Component,data) => {

    return class extends React.Component{

        constructor(props){
            super(props);
                this.state={
                     element:"",
                     modalOpen:false,
                     id:0,
                     data:[this.props.state],
                     
            }
        }


        setModalOpen = (val) =>{
            this.setState({modalOpen:val})
        }

        fetchSuggestionListing = async () => {

            const result = await axios.get(`http://localhost:8777/suggestion/getall`);
            console.log(result.data);
            this.props.suggestion(result.data);
            this.setState({ data: result.data })
        }

        componentDidMount(){
            this.fetchSuggestionListing();
        }

      

        onClickViewFunction = (id) => {
             this.setState({element:"viewsuggestion"})
             this.setState({id:id})
             this.setState({modalOpen:true});
        }


        onClickDeleteFunction = (id) => {
            this.setState({element:"deletesuggestions"});
            this.setState({id:id});
            this.setState({modalOpen:true});
        }

        onClickAddFunction = () => {
            this.setState({element:"addsuggestions"})
            this.setState({modalOpen:true});
        }

        filterBySchoolName = (event) => {
            const filterUdata =  this.props.state.filter((medico)=>
            medico.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            this.setState({data:filterUdata});
          }

        render(){


            return(
                <div>
                
                <Component filterBySchoolName={this.filterBySchoolName} onClickViewFunction={this.onClickViewFunction}
                  data ={this.state.data} onClickDeleteFunction={this.onClickDeleteFunction}
                  onClickAddFunction={this.onClickAddFunction}
                />
               
                <Modal
                status={this.state.modalOpen}  
                id={this.state.id}
                element={this.state.element}
                setModalOpen={this.setModalOpen}
                />
                </div>

            )
        }


    }
   

}


const mapDispatchToProps = dispatch => {
    return{
     suggestion: suggestion => dispatch(suggestionAction(suggestion))
    }
}


const mapStateToProps = state => {

    return{
        state:state.AllSchools.suggestion
    }
}



const composedFieldWrapper = compose(
    connect(mapStateToProps,mapDispatchToProps),
    HOC
);


export default composedFieldWrapper;