import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "pages/login/Login";
import SessionState from "context/sessionState";
import Dashboard from "pages/dashboard/Dashboard";
import { PrivateRoute } from "PrivateRoute";
import { PublicRoute } from "PublicRoute";

function App() {
  return (
    <SessionState>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </SessionState>
  );
}

export default App;