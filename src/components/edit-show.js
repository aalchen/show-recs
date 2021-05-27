import React, { Component } from "react";
import axios from "axios";

export default class EditShow extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      name: "",
      description: "",
      genre: "",
      rating: 0,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "hhttps://show-recs.herokuapp.com/shows/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          name: response.data.name,
          rating: response.data.rating,
          genre: response.data.genre,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://show-recs.herokuapp.com/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const show = {
      username: this.state.username,
      description: this.state.description,
      name: this.state.name,
      rating: this.state.rating,
      genre: this.state.genre,
    };

    console.log(show);

    axios
      .post(
        "https://show-recs.herokuapp.com/shows/update/" +
          this.props.match.params.id,
        show
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div class="pa4 f4 w-100 mw8 center avenir">
        <h3>Edit your submission</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group  pv1">
            <label>Vouched by: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group  pv1">
            <label>Show: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group  pv1">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group  pv1">
            <label>Genre: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group  pv1">
            <label>Rating (out of 10) </label>
            <input
              type="text"
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating}
            />
          </div>

          <div className="form-group pv4">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
