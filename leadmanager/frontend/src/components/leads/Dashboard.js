import React, { Fragment, Component } from 'react';
import Form from './Form';
import Leads from './Leads';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Background from "../../../static/frontend/elearning.jpg";


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  opacity: "0.8",
  filter: "drop-shadow(8px 8px 10px gray)",
  filter: "brightness(100%)",
};
export class Dashboard extends Component {

 

  render() { 
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/courses" />;
    // }
    return(
    <Fragment>
     <div className="col-12  p-0 mb-4" style={ sectionStyle }>
    
     {/* <img src={Background} width="100%" alt="image" className="mt-0" style={{visibility:false}}  />  */}
      
      
     </div>
     <div className="container">
     <div className="container mt-5 p-0">
      <h1 className={`text-${this.props.navtheme} mb-5`}>Home</h1>
      </div>
     </div>
    
    </Fragment>
  );
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.theme[0],
  navtheme: state.theme.theme[1]
});

export default connect(mapStateToProps)(Dashboard);