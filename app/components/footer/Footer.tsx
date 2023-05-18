import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <div className="footer-container grid grid-cols-3 gap-4 m-2 p-2 text-sm ">
        <div className="footer1 flex">About</div>
        <div className="footer2 flex">Documentation</div>
        <div className="footer3 flex">Get the code</div>
   </div>
    )
  }
}

export default Footer