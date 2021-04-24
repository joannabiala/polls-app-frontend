import React from 'react'
import {connect} from 'react-redux'
import {getPoll} from "../../actions/pollsActions";

class PollShow extends React.Component {

  componentDidMount() {
    this.props.getPoll(this.props.match.params.id);
    console.log(this.props)
  }


  render() {
    if (this.props.poll === undefined) {
      return null;
    }

    return (
      <div>
        <p>{this.props.poll.poll_name}</p>
        <p>{this.props.poll.poll_description}</p>
        <ul>
          {this.props.poll.questions.map((question) => {
            return (
              <div>
                <li>
                  Treść pytania: {question.question_description}
                </li>
                <ul>
                  {question.answers.map((answer) => {
                    return (
                      <div>
                        Odpowiedź: {answer.answer_description}
                      </div>
                    )
                  })
                  }
                </ul>
              </div>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {poll: state.polls[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getPoll})(PollShow)