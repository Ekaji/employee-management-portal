import CreateEmployeesForm from './components/CreateEmployeesForm';
import FetchEmployees from './components/FetchEmployees';
import Header from './components/Header';
import Details from './components/Details';
import Form from './components/Form';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

    return (
        <div className="App">
          <div className="container mx-auto px-4 sm:px-8 " > 
            <div className="py-8">
              <Header />
              <Switch>
                <Route path="/" component={FetchEmployees} exact/>
                <Route path="/create" component={CreateEmployeesForm} />
                <Route path="/details/:id" component={Details} />
                <Route path="/form" component={Form} />
              </Switch>
            </div>
          </div>
        </div>
    );
}

export default App;
