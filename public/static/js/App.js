import logo from './logo.svg';
import './dash-css/all.css';
import Home from './Home';
import MainApp from './MainApp';
import CreateItem from './CreateItem';
import CreateSingle from './CreateSingle';
import Market from './Market';
import Profile from './Profile';
import Detail from './Detail';
import topFlatters from './TopFlatters';
import topSellers from './TopSellers';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App () {
  //const currentURL = window.location.href // returns the absolute URL of a page

const pathname = window.location.pathname //returns the current url minus the domain name
  
  /*if (pathname === "/market" || pathname === "/profile" || pathname === "/detail"){
    console.log("market and profile and detail pages...");
    require('./dash-css/all-dark-some.css');
  }
      else{
        console.log("home page and all other pages...");
        require('./css/all-dark-home.css');
      }*/
     /* if(window.location.href=="http://technautic.co/" || window.location.href=="http://localhost:3000/"){
        require('./css/all-dark-home.css');
        console.log("home")
      }*/
      /*if(window.location.href.indexOf('market')>-1 || window.location.href.indexOf('profile')>-1 || window.location.href.indexOf('detail')>-1){
        require('./dash-css/all-dark-some.css');
        console.log("market page")
      }*/
  return (
    <Router>
    
 

<Switch>
  <Route path="/" exact component={Market}/>
  
  <Route path="/mainapp" component={MainApp}/>
  <Route path="/createitem" component={CreateItem}/>
  <Route path="/createsingle" component={CreateSingle}/>
  
  <Route path="/profile" component={Profile}/>
  <Route path="/detail" component={Detail}/>
  <Route path="/topflatters" component={topFlatters}/>
  <Route path="/topsellers" component={topSellers}/>
</Switch>


</Router>
  );
}

export default App;
