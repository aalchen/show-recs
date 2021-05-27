import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      // <header class="bg-white black-80 tc pv4 avenir">
      //   <h1 class="mt2 mb0 baskerville i fw1 f1">Show Recommender</h1>
      //   <h2 class="mt2 mb0 f6 fw4 ttu tracked">
      //     Drop your favourite shows below!
      //   </h2>
      //   <nav class="bt bb tc mw7 center mt4">
      //     <a
      //       class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
      //       href="/"
      //     >
      //       <Link to="/" className="nav-link">
      //         Home
      //       </Link>
      //     </a>
      //     <a
      //       class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
      //       href="/create-show"
      //     >
      //       <Link to="/create-show" className="nav-link">
      //         Add a Show
      //       </Link>
      //     </a>
      //     <a
      //       class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
      //       href="/user"
      //     >

      //     </a>
      //   </nav>
      // </header>

      <nav class="pa4 pa4-ns avenir bg-lightest-blue white">
        <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">
          SR
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="/" title="Home">
          Home
        </a>
        <a
          class="link dim gray    f6 f5-ns dib mr3"
          href="/create-show"
          title="Add"
        >
          Add a show
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="/user" title="New">
          I'm new here!
        </a>
      </nav>
    );
  }
}
