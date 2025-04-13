
import { Component } from "react";
import Cookies from "js-cookie";
// import { FaSearch } from "react-icons/fa";
import Headerpage from "../Headerpage";
import CategoriItems from "../CategoriItems";
import SideBar from "../SideBar"
import "./index.css";

class CategoriesPage extends Component {
  state = { categorilist: [], searchinput: "",userName:"" };

  componentDidMount() {
    this.getCategori();
    this.getUserProfile();
  }

  getCategori = async () => {
    const jwtToken = Cookies.get("jwt_token");
    if (!jwtToken) {
      console.error("JWT Token is missing!");
      return;
    }
   
    const url = "http://localhost:3000/categories";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      this.setState({ categorilist: data });
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  getUserProfile = async () => {
    const jwtToken = Cookies.get("jwt_token");

    const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${jwtToken}`,
        },
    });

    const data = await response.json();
    console.log(data)

    if (response.ok) {
        const { username } = data;
        console.log("Username from backend:", username);
        this.setState({userName:username})
    } else {
        console.error("Failed to fetch user profile:", data.message);
    }
};
 
  onClickCreateItems = () => {
    window.location.href = "/categories/create";
  };

  onDeleteItem = async (id) => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const url = `http://localhost:3000/categories/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to delete item. Status: ${response.status}`);
      }

      this.setState((prevState) => ({
        notelist: prevState.categorilist.filter((each) => each.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  onChangeSearch = (event) => {
    this.setState({ searchinput: event.target.value });
  };

  ondeleteitem = async (id) => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const url = `http://localhost:3000/categories/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to delete item. Status: ${response.status}`);
      }

      this.setState((prevState) => ({
        categorilist: prevState.categorilist.filter((each) => each.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };


  onEditItem = async (id, updatedData) => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const url = `http://localhost:3000/categories/${id}`;
      const options = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // include updated name/item_count/image_url
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || `Failed to update item. Status: ${response.status}`);
      }
  
      // Update the item in state
      this.setState((prevState) => ({
        categorilist: prevState.categorilist.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        ),
      }));
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };
  


  render() {
    const { categorilist, searchinput, userName } = this.state;
    const filteredcategori = categorilist.filter((each) =>
      each.name.toLowerCase().includes(searchinput.toLowerCase())
    );


    return (
      <>
        <Headerpage userName={userName}/>
        <div className="sidebar-containt">
        <SideBar/>
        <div className="note-container">
          <ul className="ul-container">
            <div className="note-createbutton">
                <div className="search-addbutton-container">
                <div className="search-container">
                <input
                  type="search"
                  placeholder="Search items"
                  id="search"
                  onChange={this.onChangeSearch}
                  value={searchinput}
                  className="search-input"
                />
              </div>
              <button className="button-add" onClick={this.onClickCreateItems}>
                + Add Category
              </button>
                </div>
                <h1>Categories</h1>
              <ul className="ul-container">
                {filteredcategori.length > 0 ? (
                   filteredcategori.map(each => (
                    <CategoriItems items={each} key={each.id} ondeleteitem={this.ondeleteitem}  oneditItem={this.onEditItem}/>
                ))
                ):(<img src="/no-product-found.png"/>) }
              
               
               
              </ul>
            </div>
          </ul>
        </div>
        </div>
      </>
    );
  }
}

export default CategoriesPage ;















