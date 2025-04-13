import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import "./index.css"

const Headerpage = (props) => {
    const {userName} = props
    const onclickLagout = () => {
        const {history} = props 
        Cookies.remove("jwt_token")
        history.replace("/login")
        window.location.reload();
    }
    const onclickNotes = () => {
        const {history} = props 
        history.replace("/")
        window.location.reload();
    }

    return(
        <div className='header-container'>
        <img
          src="/websitelogo.png"
           className='header-logo'
          alt="website logo"
        />
         
        <div className="note-logout-container">
  <button onClick={onclickNotes} type="button" className="note-button">
    Categories
  </button>

  <div className="user-info">
    <span className="first-letter">
      {userName?.charAt(0).toUpperCase()}
    </span>
    <span className="username">{userName}</span>
  </div>

  <button onClick={onclickLagout} type="button" className="logout-button">
    Logout
  </button>
</div>

        
        </div>
    )
}
export default withRouter(Headerpage)