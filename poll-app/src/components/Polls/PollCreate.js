import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPoll} from "../../actions/pollsActions";

class PollCreate extends Component {
  state = {
    poll_name: "",
    poll_description: ""
  }

  handleTextChange = event => {
    const {target: {name, value}} = event;
    this.setState({ [name]: value });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPoll(this.state);
    this.setState({
      poll_name: "",
      poll_description: ""
    });
  }

  render(){
    return(
      <div className="form-container">
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Poll name</label>
            <input onChange={this.handleTextChange} value={this.state.poll_name} type="text" name="poll_name" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Poll description</label>
            <input onChange={this.handleTextChange} value={this.state.poll_description} type="text" name="poll_description" className="form-control" placeholder="City" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Add poll</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPoll })(PollCreate);