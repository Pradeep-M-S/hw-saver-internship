import React, { Component } from "react";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WelcomePage from "./pages/WelcomePage/WelcomePage";

import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";
import HomePage from "./pages/HomePage/HomePage";
import ImagesPage from "./pages/ImagesPage/ImagesPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import Header2 from "./components/Header/Header2";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    // Destructuring the setCurrentUser from redux props .
    const { setCurrentUser } = this.props;
    // Whenever the auth state changes the state is updated using setState
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);
        userReference.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Header2 />
        <span className="abs"></span>{" "}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser ? <Redirect to="/home" /> : <WelcomePage />
            }
          />
          <Route path="/home" component={HomePage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/images" component={ImagesPage} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/albums" component={AlbumsPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
