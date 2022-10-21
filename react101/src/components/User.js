import React from 'react'
import PropTypes from 'prop-types'

const User = ({name, surname, age}) => {

  return (
    <div>
        User
        <div>İsim: {name}</div>
        <div>Soyisim: {surname}</div>
        <div>Yaş: {age}</div>
        <hr />
    </div>
  )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number
}

export default User