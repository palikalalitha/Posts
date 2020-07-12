import React, { Component } from 'react'
export const SampleButton = React.forwardRef((props, ref) => (
  <button ref={ref} className='button'>
    {props.children}
  </button>
  // <input type='text' placeholder='Welcome' ref={ref} />
))
