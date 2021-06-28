import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "pages/login/Login";
import SessionState from "context/session/sessionState";
import Dashboard from "pages/dashboard/Dashboard";
import { PrivateRoute } from "PrivateRoute";
import { PublicRoute } from "PublicRoute";
import BenevitsState from "context/benevits/benevitsState";
import Benevits from "pages/benevits/Benevits";
import BenevitsUser from "pages/benevits-user/BenevitsUser";

function App() {
  return (
    <SessionState>
      <BenevitsState>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/benevits" component={Benevits} />
            <PrivateRoute path="/benevits-unlocked" component={BenevitsUser} />
          </Switch>
        </Router>
      </BenevitsState>
    </SessionState>
  );
}

export default App;