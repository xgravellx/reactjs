import React from 'react'
import { Formik, Field, Form } from 'formik'
import validations from './Validation'
import { useTodo } from '../../../contexts/TodoContext'


const Forms = () => {

  const {addTodo} = useTodo();

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        addTodo(values.text);
        // yazdıktan sonra resetler
        bag.resetForm();
      }}
      validations = {validations}
    >
      <Form>
        <Field 
          className="new-todo" 
          placeholder="What needs to be done?" 
          autoFocus
          id='text'
          name='text'
        />
      </Form>
    </Formik>
  )
}

export default Forms