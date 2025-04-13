
import React from "react";
import {Link, withRouter} from 'react-router-dom'
import "./index.css";
import {
  FaHome,
  FaClipboardList,
  FaTags,
  FaFolderOpen,
  FaUsers,
  FaChartBar,
  FaTicketAlt,
  FaInbox,
  FaBook,
  FaLightbulb,
  FaUserCog,
  FaCogs,
} from "react-icons/fa";

const SideBar = (props) => {


const onclickCategie = () => {
        const {history} = props 
        history.replace("/")
        window.location.reload();
    }

// const onclickdashboard = () => {
//     const {history} = props 
//     history.replace("/dashboard")
//     window.location.reload();
// }




  return (
    <div className="sidebar">
      <div className="sidebar-section">
        
        <div className="dashbord-class">
        <FaHome  /> 
        <h1 className="dashbord-heading">Dashboard</h1>
        </div>
        
        

        <div className="dashbord-class">
        <FaClipboardList /> 
        <h1 className="dashbord-heading">Orders</h1>
        </div>

       
        <div className="dashbord-class">
        <FaTags /> 
        <h1 className="dashbord-heading">Products</h1>
        </div>


        
        <div className="dashbord-class-catego" onClick={onclickCategie} >
        <FaFolderOpen /> 
        <h1 className="dashbord-heading">Categories</h1>
        </div>


        
        <div className="dashbord-class">
        <FaUsers/> 
        <h1 className="dashbord-heading">Customers</h1>
        </div>


        
        <div className="dashbord-class">
        <FaChartBar /> 
        <h1 className="dashbord-heading">Reports</h1>
        </div>


        

        <div className="dashbord-class">
        <FaTicketAlt /> 
        <h1 className="dashbord-heading">Coupons</h1>
        </div>

      
        <div className="dashbord-class">
        <FaInbox /> 
        <h1 className="dashbord-heading">Inbox</h1>
        </div>
      </div>

      <div className="sidebar-group-title">Other Information</div>
      <div className="sidebar-section">
       
        <div className="dashbord-class">
        <FaBook  /> 
        <h1 className="dashbord-heading">Knowledge Base</h1>
        </div>
 
        <div className="dashbord-class">
        <FaLightbulb  /> 
        <h1 className="dashbord-heading">Product Updates</h1>
        </div>
      </div>

      <div className="sidebar-group-title">Settings</div>
      <div className="sidebar-section">
      
        <div className="dashbord-class">
        <FaUserCog  /> 
        <h1 className="dashbord-heading">Personal Settings</h1>
        </div>
        
        <div className="dashbord-class">
        <FaCogs  /> 
        <h1 className="dashbord-heading">Global Settings</h1>
        </div>
      </div>
    </div>
  );
};


export default withRouter(SideBar);





