import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'

import './../packages/bpk-stylesheets/base.scss'
import BpkGridToggle from './../packages/bpk-component-grid-toggle'

addDecorator((story) => <div>{story()}<br /><BpkGridToggle/></div>)

configure(() => {
  require('./../packages/bpk-component-button/stories')
  require('./../packages/bpk-component-content-container/stories')
  require('./../packages/bpk-component-grid-toggle/stories')
  require('./../packages/bpk-component-heading/stories')
  require('./../packages/bpk-component-icon/stories')
  require('./../packages/bpk-component-link/stories')
  require('./../packages/bpk-component-list/stories')
  require('./../packages/bpk-component-logo/stories')
  require('./../packages/bpk-component-paragraph/stories')
  require('./../packages/bpk-component-router-link/stories')
  require('./../packages/bpk-component-spinner/stories')
  require('./../packages/bpk-component-table/stories')
}, module)
