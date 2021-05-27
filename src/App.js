import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import CreateUser from "./components/create-user";
import CreateShow from "./components/create-show";
import ShowList from "./components/shows-list";
import EditShow from "./components/edit-show";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ShowList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/edit/:id" component={EditShow} />
        <Route path="/create-show" component={CreateShow} />
        <Route path="/shows-list" component={ShowList} />
      </div>
    </Router>
  );
}

export default App;
