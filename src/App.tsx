import CreateItem from './pages/CreateItemPage';
import CreateSingle from './pages/CreateSinglePage';
import Market from './pages/MarketPage';
import Profile from './pages/ProfilePage';
import Detail from './pages/DetailPage';
import TopFlatters from './pages/TopFlattersPage';
import TopSellers from './pages/TopSellersPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Market}/>
        
        <Route path="/createitem" component={CreateItem}/>
        <Route path="/createsingle" component={CreateSingle}/>
        
        <Route path="/profile" component={Profile}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/topflatters" component={TopFlatters}/>
        <Route path="/topsellers" component={TopSellers}/>
      </Switch>
    </Router>
  );
}

export default App;
