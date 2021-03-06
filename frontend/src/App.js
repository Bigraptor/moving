import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Home, Auth } from "./pages";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActions from "redux/modules/user";
import storage from "lib/storage";

class App extends Component {

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    if(!loggedInfo) return;

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);

    try {
      await UserActions.checkStatus();
    }catch(e) {
      storage.remove('loggedInfo');
      window.location.href = '/auth?expired';
    }
  }

  componentDidMount(){
    this.initializeUserInfo();
  }

  render() {
    return (
      <div>
        <Route exact path = "/" component = {Home} />
        <Route path = "/auth" component = {Auth} />
      </div>
    );
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(App);
