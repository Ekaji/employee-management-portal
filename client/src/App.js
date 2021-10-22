import Home from './components/Home';
import Details from './components/Details';
import Delete from './components/Delete';
import CreateEmploye from './components/CreateEmploye';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

    return (
        <div className="App bg-gray-200 min-h-screen">
          <div className="container mx-auto px-4 sm:px-8  " > 
            <div className="py-1 md:py-8">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/details/:id" component={Details} />
                <Route path="/create" component={CreateEmploye} />
                <Route path="/delete" component={Delete} />
              </Switch>
            </div>
          </div>
        </div>
    );
}

export default App;
