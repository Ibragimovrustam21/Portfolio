import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Navbar } from "./component/Navbar";
import { UserChecked } from "./component/UserChecked";
import { UserContextProvider } from "./component/UserContext";
import { Articles } from "./pages/Articles";
import { ArticlesEdit } from "./pages/ArticlesEdit";
import { Authorization } from "./pages/Authorization";
import { CreatePost } from "./pages/CreatePost";
import { Home } from "./pages/home/Home";
import { ProfileUser } from "./pages/ProfileUser";
import { Settings } from "./pages/settings";
import { TagFeed } from "./pages/TagFeed";
import { YourFeed } from "./pages/YourFeed";

function App() {
  return (
    <UserContextProvider>
      <UserChecked>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/feed' component={YourFeed} />
            <Route path='/tags/:slug' component={TagFeed} />
            <Route path='/articles/new' component={CreatePost} />
            <Route path='/articles/:slug/edit' component={ArticlesEdit} />
            <Route path='/articles/:slug' component={Articles} />
            <Route path='/profile/:slug' component={ProfileUser} />
            <Route path='/profile/:slug/favorites' component={ProfileUser} />
            <Route path='/settings' component={Settings} />
            <Route path='/register' component={Authorization} />
            <Route path='/login' component={Authorization} />
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </UserChecked>
    </UserContextProvider>

  )
}

export default App;
