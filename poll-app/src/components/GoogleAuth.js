import React from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";


class GoogleAuth extends React.Component {


  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '593670350188-kkqii27fl26jls0ffk8ki3d8ptbb2n0n.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()

        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })

  }


  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }


  onSignOutClick = () => {
    this.auth.signOut()
  }


  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>i dont know if we are signed in</div>
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          sign out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"/>
          sign in with Google
        </button>
      )
    }
  }


  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {isSignedIn: state.auth.isSignedIn}
}


export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth)