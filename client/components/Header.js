import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class Header extends Component {
  render() {
    const { user } = this.props.data
    console.log(user)
    if(!user) return <div></div>

    return (
      <div>Header</div>
    )
  }
}

export default graphql(query)(Header) 