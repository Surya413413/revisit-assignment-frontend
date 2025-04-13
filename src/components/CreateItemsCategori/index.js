import { Component } from "react";
import {Link, withRouter} from "react-router-dom"
import {navigate} from "react-router-dom"
import Cookies from "js-cookie"
import Headerpage from "../Headerpage";

import "./index.css"; // Import CSS file

class CreateItemsCategori extends Component {
  state = {
    name: "",
    item_count: "",
    image_url:"",
    message:"",
    redirect:false}
  handleChangetitle = (event) => {
this.setState({name:event.target.value})
  }

  handleChangecontent = event => {
    this.setState({item_count:event.target.value})
  }
  handleChangecategory = event => {
    this.setState({image_url:event.target.value})
  }

 handleSubmit = async (event) => {
    event.preventDefault();
    const {name,item_count,image_url} = this.state
    console.log("Form Data Before Sending:", { name, item_count, image_url }); // Debugging

  if (!name || !item_count || !image_url) {
    this.setState({ message: "All fields are required!" });
    return;
  }
    const formData = {
      name,
      item_count,
      image_url
    }

    try {
        const jwtToken = Cookies.get('jwt_token')
      const url = "http://localhost:3000/categories/create"
      const option ={
        method: "POST",
        headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
         },

        body: JSON.stringify({name,item_count,image_url}),
      }
      const response = await fetch(url,option)
      const data = await response.json(); 
      console.log(response)
      console.log(data)
      if (response.ok) {
        this.setState({message:response.statusText
          , redirect: true,name: "",               
          item_count: "",               
          image_url: "",});
        setTimeout(() => {
            window.location.href = "/" // React Router v5
        }, 1000);
      } else {
      this.setState({ message: data.error || "Failed to Create." });
      }
    } catch (error) {
      this.setState({message:`${error} :"Error: Unable to Create.` });
      console.log(error)
    }
  };

  loginpage = (event) => {
    event.preventDefault();
    const {history} = this.props
    history.replace('/login');
    window.location.reload();
  }
render(){
  const {name,item_count,image_url,message,redirect} = this.state
 
  return (
    <>
    <Headerpage/>
    
    <div className="register-container">
      <div className="register-box">
        <div className="imge-regitertext">
        <img
            src="/websitelogo.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
        <h2 className="register-title">+ Add Category</h2>
        </div>
     
         <p className="register-message">{message}</p>
        <form onSubmit={this.handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={name}
            onChange={this.handleChangetitle}
            required
            className="register-input"
          />
          <input
            type=""
            name="item_count"
            placeholder="Item Count"
            value={item_count}
            onChange={this.handleChangecontent}
            required
            className="register-input"
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image url"
            value={image_url}
            onChange={this.handleChangecategory}
            required
            className="register-input"
          />
          <button type="submit" className="register-button">
            + Add Category
          </button>
        </form>
       
        
        
      </div>
    </div>
    </>
  );
}
};

export default withRouter(CreateItemsCategori);