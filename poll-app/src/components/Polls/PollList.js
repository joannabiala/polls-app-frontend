import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPolls} from "../../actions/pollsActions";

class pollList extends Component {
  componentDidMount(){
    this.props.getPolls()

  }
  render() {
    const {polls} = this.props.polls
    console.log(polls)


    return (
      <div>
        {polls.map(u =>
          <React.Fragment key={u.id}>
            <h6 >{u.poll_name}</h6>
            <h6 >{u.poll_description}</h6>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps  = (state) => ({polls:state.polls})

export default connect(mapStateToProps, {getPolls})(pollList)