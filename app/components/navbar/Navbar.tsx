import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <div className="navbar-container grid grid-cols-3 ">

        <div className="navbar-col1 col-span-2"> </div>
        <div className="navbar-col2 col-span-1">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/13/Cryptocurrency-Bitcoin-Logo-Line-Graphics-13353101-1.jpg" alt=""/>
        </div>
        </div>
    )
  }
}

export default Navbar