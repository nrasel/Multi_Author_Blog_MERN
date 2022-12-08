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
        {/* for user component route which just visit user*/}
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/adminlogin" component={AdminLogin} exact />
        {/*  article show for pagination route */}
        <Route path="/article/:currentPage?" component={Home} exact />
        {/*article details route find individual article using this slug  */}
        <Route path="/article/details/:slug" component={Home} exact />
        {/* article category route   */}
        <Route
          path="/article/category/:categorySlug/:currentPage?"
          component={Home}
          exact
        />
        {/* article tag route */}
        <Route
          path="/article/tag/:tagSlug/:currentPage?"
          component={Home}
          exact
        />
        {/* article search route */}
        <Route path="/article/search/:searchValue" component={Home} exact />

        {/* dashboard route */}
        <Route path="/dashboard" component={Dashboard} exact />

        {/* for handle all article under dashboard  */}
        {/* dashboard all article route and pagination */}
        <Route
          path="/dashboard/all-article/:currentPage?"
          component={Dashboard}
          exact
        />
        {/* article add route under dashboard */}
        <Route path="/dashboard/add-article" component={Dashboard} exact />
        {/* article edit route to find the individual article using this articleSlug(slug) */}
        <Route
          path="/dashboard/article/edit/:articleSlug"
          component={Dashboard}
          exact
        />

        {/* for handle all category under dashboard route */}
        {/* dashboard all category route and pagination */}
        <Route
          path="/dashboard/all-category/:currentPage?"
          component={Dashboard}
          exact
        />
        {/* category add route under dashboard */}
        <Route path="/dashboard/add-category" component={Dashboard} exact />
        {/* article edit route to find the individual article using this articleSlug(slug) */}
        <Route
          path="/dashboard/category/edit/:catSlug"
          component={Dashboard}
          exact
        />

        {/* for handle all tag under dashboard route */}
        {/* dashboard all tag route and pagination */}
        <Route
          path="/dashboard/all-tag/:currentPage?"
          component={Dashboard}
          exact
        />
        {/* tag add route under dashboard */}
        <Route path="/dashboard/add-tag" component={Dashboard} exact />
        {/* category edit route to find the individual article using this articleSlug(slug) */}
        <Route
          path="/dashboard/tag/edit/:tagSlug"
          component={Dashboard}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
