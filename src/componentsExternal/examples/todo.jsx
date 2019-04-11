import React from 'react'
import PropTypes from 'prop-types'
import { withFirebase } from 'react-redux-firebase'
import { compose, withHandlers } from 'recompose'

function Todos({ firebase, addSampleTodo }) {
  return (
    <div>
      <h1>New Sample Todo</h1>
      <button onClick={addSampleTodo}>
        Add
      </button>
    </div>
  )
}

const enhance = compose(
  withFirebase,
  withHandlers({
    addSampleTodo: props => () => {
      const sampleTodo = { text: 'Sample', done: false };
      return props.firebase.push('todos', sampleTodo)
    }
  })
);

export default enhance(Todos)