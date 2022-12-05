import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/auth/AdminLogin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/adminlogin" component={AdminLogin} exact />
        <Route path="/article/:currentPage?" component={Home} exact />
        <Route path="/article/details/:slug" component={Home} exact />
        <Route
          path="/article/category/:categorySlug/:currentPage?"
          component={Home}
          exact
        />
        <Route
          path="/article/tag/:tagSlug/:currentPage?"
          component={Home}
          exact
        />
        <Route path="/article/search/:searchValue" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
