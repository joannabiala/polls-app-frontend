import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {getPolls} from "../../actions/pollsActions";

class pollList extends Component {
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
          const linkTo = "/polls/show/" + item.id;
          return (
            <React.Fragment key={item.id}>
              <div>
                <div className="ui relaxed divided list">
                  <div className="item">
                    <i className="large edit outline middle aligned icon"/>
                    <div className="content">
                      <Link to={linkTo}>
                        <a className="header">Nazwa ankiety: {item.poll_name}</a>
                      </Link>
                      <div className="description">Opis ankiety: {item.poll_description}</div>
                    </div>
                  </div>
                </div>
                <hl/>
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

export default connect(mapStateToProps, {getPolls})(pollList)