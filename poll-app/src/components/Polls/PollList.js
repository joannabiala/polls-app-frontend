import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {getPolls, deletePoll} from "../../actions/pollsActions";

class PollList extends Component {
  componentDidMount() {
    this.props.getPolls()
  }

  render() {
    const {polls} = this.props.polls
    console.log(polls)


    return (
      <div>
        <h3>Moje ankiety</h3>
        {polls.map(item => {
            return (
              <React.Fragment key={item.id}>
                <div>
                  <div className="ui relaxed divided list">
                    <div className="item">
                      <i className="large edit outline middle aligned icon"/>
                      <div className="content">
                        <Link to={`/polls/show/${item.id}`}>
                          <p className="header">Nazwa ankiety: {item.poll_name}</p>
                        </Link>
                        <div className="description">Opis ankiety: {item.poll_description}</div>
                        <div className="right floated content">
                          <button onClick={() => this.props.deletePoll(item.id)} className="ui button negative">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p/>
                </div>
              </React.Fragment>
            )
          }
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({polls: state.polls})

const mapDispatchToProps = dispatch => {
  return {
    getPolls: () => dispatch(getPolls()),
    deletePoll: (id) => dispatch(deletePoll(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollList)