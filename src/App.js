import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";
import Header from "./Pages/Shared/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Experts from "./Pages/Experts/Experts";
import Register from "./Pages/Register/Register";
import SingleService from "./Pages/Services/Service/SingleService";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/experts" component={Experts} /> */}
            <PrivateRoute path="/service/:serviceId">
              <SingleService />
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
