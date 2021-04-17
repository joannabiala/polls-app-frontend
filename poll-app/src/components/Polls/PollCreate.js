import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {submit} from "./submit";

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderQuestions = ({fields, meta: {error, submitFailed}}) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Dodaj pytanie:
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((question, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
        />
        <h4>Pytanie #{index + 1}</h4>
        <Field
          name={`${question}.question_description`}
          type="text"
          component={renderField}
          label="Dodaj treść pytania."
        />

        <FieldArray name={`${question}.answers`} component={renderAnswers}/>
      </li>
    ))}
  </ul>
)


const renderAnswers = ({fields, meta: {error}}) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Dodaj odpowiedź
      </button>
    </li>
    {fields.map((answer, index) => (
      <li key={index}>
        <button
          type="button"
          title="Usuń odpowiedź"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={answer}
          type="text"
          component={renderField}
          label={`Odpowiedź #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)


const QuestionAnswerForm = props => {

  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="poll_description"
        type="text"
        component={renderField}
        label="Opis ankiety"
      />
      <Field
        name="poll_name"
        type="text"
        component={renderField}
        label="Nazwa ankiety"
      />
      <FieldArray name="questions" component={renderQuestions}/>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'questionAnswerForm',
  onSubmit: submit
})(QuestionAnswerForm)
