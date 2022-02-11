
import { Navigate } from "react-router-dom";




const PrivateRoute = (props) => {

  return localStorage.getItem("isLoggedIn") === "true" ? props.children : <Navigate to="/" />;

};

export default PrivateRoute;