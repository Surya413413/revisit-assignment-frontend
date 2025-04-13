
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Loginpage from "./components/Loginpage"
import CategoriesPage from "./components/CategoriesPage"
import Registerpage from "./components/Registerpage"
import ProtectedRoutePage from "./components/ProtectedRoutePage"
import CreateItemsCategori from './components/CreateItemsCategori'
import NotFoundPage from './components/NotFoundPage'


import "./App.css"



const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Loginpage}/>
    <Route exact path="/register" component={Registerpage}/>
    <ProtectedRoutePage exact path="/" component={CategoriesPage}/>
    <ProtectedRoutePage exact path="/categories/create" component={CreateItemsCategori}/>
    <Route exact path="/not-found" component={NotFoundPage} />
  <Redirect to="not-found" />
  </Switch>
  </BrowserRouter>
  
)

export default App;
