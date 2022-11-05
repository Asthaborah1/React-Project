import './App.css';
import {Navbar, Header, Features, Download, Subscribe, Faq, Footer } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
// import './css/style.css';
// import './charts/ChartjsConfig';
import Dashboard from './components/dashboard/dashboard';



function App() {

  return (
    <> 
    <Router>
      
      <Switch>

          <Route exact path="/" render={()=>{
            return(
            <>
            <Navbar/>
            <Header/>
            <Features/>
            <Download/>
            <Subscribe/>
            <Faq/>
            <Footer/>
            
            </>)
          }}> 
          </Route>
          <Route exact path="/login">
            <Navbar/>
            <Login />
            <Footer /> 
          </Route>
          
          <Route exact path="/dashboard">
            <Dashboard />
          </Route> 
        </Switch> 
      
    </Router>
    </>
  );
}

export default App;
