import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {getAllPolls} from "../actions/pollsActions";

class Home extends Component {

  componentDidMount() {
    this.props.getAllPolls()

  }

  render() {
    const {polls} = this.props.polls
    console.log(polls)


    return (
      <div>
        <h3>Wszystkie dostępne ankiety</h3>
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
    getAllPolls: () => dispatch(getAllPolls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)