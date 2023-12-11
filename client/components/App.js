import React from 'react'
import Header from './Header'

function App(props) {
  return (
    <div className='container'>
        <Header />
        {props.children}
    </div>
  )
}

export default App