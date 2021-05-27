import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = (props) => (
  <tr>
    <td>{props.show.username}</td>
    <td>{props.show.name}</td>
    <td>{props.show.description}</td>
    <td>{props.show.genre}</td>
    <td>{props.show.rating}</td>
    <td>
      <Link to={"/edit/" + props.show._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteShow(props.show._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ShowsList extends Component {
  constructor(props) {
    super(props);

    this.deleteShow = this.deleteShow.bind(this);

    this.state = { shows: [] };
  }

  componentDidMount() {
    axios
      .get("https://show-recs.herokuapp.com/shows/")
      .then((response) => {
        this.setState({ shows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteShow(id) {
    axios
      .delete("https://show-recs.herokuapp.com/shows/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      shows: this.state.shows.filter((el) => el._id !== id),
    });
  }

  showList() {
    return this.state.shows.map((currentshow) => {
      return (
        <Show
          show={currentshow}
          deleteShow={this.deleteShow}
          key={currentshow._id}
        />
      );
    });
  }

  render() {
    return (
      <div class="pa4 f2 w-100 mw8 center avenir">
        <h3>Show Recommender</h3>
        <table class="f5 w-100 mw8 center avenir" cellspacing="0">
          <thead>
            <tr>
              <th class="fw10 bb b--black-20 tl pb3 pr3 bg-white">
                Vouched by
              </th>
              <th class="fw10 bb b--black-20 tl pb3 pr3 bg-white">Show</th>
              <th class="fw10 bb b--black-20 tl pb3 pr3 bg-white">
                Description
              </th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Genre</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                Rating (out of 10)
              </th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Actions</th>
            </tr>
          </thead>
          <tbody>{this.showList()}</tbody>
        </table>
      </div>
    );
  }
}
