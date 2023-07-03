import React, { Component } from 'react'
import Header from './header'
import Banner from './banner'
import Items from './items'
import Footer from './footer'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <Items></Items>
        <Footer></Footer>
      </div>
    )
  }
}
