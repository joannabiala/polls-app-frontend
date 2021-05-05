import React from 'react'
import {connect} from 'react-redux'
import {getPoll} from "../../actions/pollsActions";
import {Field, reduxForm} from 'redux-form'
import {compose} from "redux";
import { withRouter } from "react-router";



class PollForm extends React.Component {

  componentDidMount() {
    this.props.getPoll(this.props.match.params.id);
    console.log(this.props)
  }

  renderInput = ({input, label}) => {

    return (
      <div>
        <label>{label}</label>
        <input {...input} type="radio"/>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {

    if (this.props.poll === undefined) {
      return null;
    }


    return (
      <form  onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <p>{this.props.poll.poll_name}</p>
          <p>{this.props.poll.poll_description}</p>
          <ul>
            {this.props.poll.questions.map((question) => {
              return (
                <div id={question.id}>
                  <li>
                    Treść pytania: {question.question_description}
                  </li>
                  <ul>
                    {question.answers.map((answer) => {
                      return (
                        <div>
                          <div>
                            <label>
                              <Field
                                id={answer.id}
                                name={question.question_description}
                                component={this.renderInput}
                                value={answer.answer_description}
                                type="radio"
                              />
                              {answer.answer_description}
                            </label>
                          </div>
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
        <button type="submit">Submit</button>
      </form>
    )
  }
}


PollForm = reduxForm({
  form: 'PollForm' // a unique name for this form
})(PollForm);


const mapStateToProps = (state, ownProps) => {
  return {poll: state.polls[ownProps.match.params.id]}
}


export default compose(
  withRouter,
  connect(mapStateToProps, {getPoll}),
)(PollForm);

//export default connect(mapStateToProps, {getPoll})(PollForm)