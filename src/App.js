import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'
import NewsItem from './componets/News'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <News pageSize={7} category="sports" />
      </div>
    )
  }
}
