// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         );
//       }}
//     ></Route>
//   );
// }
import React from "react";
import Unauthorized from "../components/Unauthorized";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, allowedRoles }) {
  const { currentUser, roles } = useAuth();
  console.log(roles); 
  return currentUser && roles.find(role => allowedRoles.includes(role)) ? children : <Unauthorized />;
}
