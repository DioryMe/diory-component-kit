import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  position: 'relative',
  padding: '0.5em'
}

export const ExampleComponent = ({ data, style }) => !data ? null : (
  <div style={{ ...defaultStyles, ...style }}>ExampleComponent</div>
)

ExampleComponent.propTypes = {
  data: PropTypes.string,
  style: PropTypes.object
}
