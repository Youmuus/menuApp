import React, { Component } from "react";
import "./Pages.css";


export default class Pages extends Component {
  state = {
    active: false,
    something: false
  };

  componentDidMount() {
    document.addEventListener("click", this.detectOutsideClicks);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.detectOutsideClicks);
  }

  collapse = () => {
    let current = this.state.active;
    this.setState({
      active: !current,
      something: false
    });
  };

  collapse1 = () => {
    let current = this.state.something;
    this.setState({
      something: !current,
      active: false
    });
  };

  render() {
    const cssClasses = ["pages", "side-bar", this.props.show];
    if (this.props.show) {
      cssClasses.push("active");
    }
    return (
      <div className={cssClasses.join(" ")}>
        <h2>
          Menu 1
          <i onClick={this.props.triggerReset} className="fa fa-times" />
        </h2>
        <ul>
          <li className="nav-toggle">
            Submenu 1{" "}
            <i
              onClick={this.collapse}
              className={
                this.state.active
                  ? "fa fa-chevron-down active"
                  : "fa fa-chevron-down"
              }
            />
            <ul
              id="inner-list-pag"
              className={this.state.active ? "active" : null}
            >
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="nav-toggle">
            Submenu 2{" "}
            <i
              onClick={this.collapse1}
              className={
                this.state.something
                  ? "fa fa-chevron-down active"
                  : "fa fa-chevron-down"
              }
            />
            <ul
              id="inner-list-pag1"
              className={this.state.something ? "active" : null}
            >
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
