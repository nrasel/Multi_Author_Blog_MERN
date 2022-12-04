import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
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
      </Switch>
    </Router>
  );
}

export default App;
