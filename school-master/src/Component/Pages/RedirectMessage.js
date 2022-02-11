import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectMessage(props) {

  let navigate = useNavigate();

  if (props.redirect){
      navigate('/welcomeadmin');
  return (<div></div>);
  }
  else{
      return(<div></div>);
  }
}