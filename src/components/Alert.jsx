import React from 'react'
import t from 'prop-types'

const types = {
  info: '#5352ED',
  success: '#2ED573',
  dangerous: '#FF4757',
  warning: '#FFA502'
}

export const Alert = ({ children, type, ...rest }) => (
  <div
    style={{
      padding: 20,
      borderRadius: 3,
      color: 'white',
      backgroundColor: types[type]
    }}
    {...rest}
  >
    {children}
  </div>
)

Alert.propTypes = {
  type: t.oneOf(['info', 'success', 'dangerous', 'warning']),
  children: t.node.isRequired
}

Alert.defaultProps = {
  type: 'info'
}
