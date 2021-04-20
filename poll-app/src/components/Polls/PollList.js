import React, {Component} from 'react'
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
        {polls.map(item => {
          return (
            <React.Fragment key={item.id}>
              <div>
                <p>Nazwa ankiety: {item.poll_name}</p>
                <p>Opis ankiety: {item.poll_description}</p>
                <ul>
                  {item.questions.map((question) => {
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
              <p>________________</p>
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