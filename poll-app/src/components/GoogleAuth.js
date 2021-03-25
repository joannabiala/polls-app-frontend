import React from 'react';

class GoogleAuth extends React.Component{
  state = {isSignedIn: null};


  componentDidMount() {
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '593670350188-kkqii27fl26jls0ffk8ki3d8ptbb2n0n.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })

  }


  onAuthChange =()=> {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})

  }

  onSignIn =()=>{
    this.auth.signIn()
  }


  onSignOut =()=>{
    this.auth.signOut()
  }



  renderAuthButton(){
    if(this.state.isSignedIn===null){
      return <div>i dont know if we are signed in</div>
    } else if (this.state.isSignedIn){
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon"/>
          sign out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon"/>
          sign in with Google
        </button>
      )
    }
  }


  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth