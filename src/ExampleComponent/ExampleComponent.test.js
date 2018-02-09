/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { ExampleComponent } from './ExampleComponent'

describe('<ExampleComponent />', () => {
  let getComponent
  let props
  beforeEach(() => {
    props = {}
    getComponent = () => shallow(<ExampleComponent { ...props } />)
  })

  describe('given data as prop', () => {
    beforeEach(() => {
      props.data = 'some-data'
    })

    it('renders the component', () => {
      expect(getComponent().exists()).toEqual(true)
    })

    describe('given a style as prop', () => {
      it('sets style to the text', () => {
        props.style = { color: 'some-color' }
        expect(getComponent().props().style.color).toEqual('some-color')
      })
    })
  })

  describe('given no data as prop', () => {
    it('does not render the component', () => {
      expect(getComponent().html()).toBeNull()
    })
  })
})
