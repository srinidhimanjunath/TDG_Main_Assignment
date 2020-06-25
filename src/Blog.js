import React, { Component } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import axios from "axios";

// const updatedIngredient = {
//   ...this.state.ingredients,
// };
// updatedIngredient[type] = updatedCount;

import "./Blog.css";
//https://jsonplaceholder.typicode.com/users
class Blog extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const posts = response.data.slice(0, 1);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
        };
      });
      this.setState({ posts: updatedPosts, updated: true });
      console.log(posts);
    });
  }
  state = {
    clicked: false,
    post: [],
    updated: false,
  };
  handleEvent = () => {
    this.setState({ clicked: true });
  };
  nameHandler = () => {
    const name1 = this.refs.name.value;
    const oldState = {
      ...this.state.post,
    };
    oldState["name"] = name1;
    this.setState({ post: oldState });
    // console.log(this.state.post);
  };
  clicked = () => {
    document.getElementById("name").focus();
  };
  blurFunc = () => {
    console.log(this.refs.name.value);
  };
  clicked1 = () => {
    document.getElementById("username").focus();
  };
  blurFunc1 = () => {
    console.log(this.refs.username.value);
  };
  clicked2 = () => {
    document.getElementById("email").focus();
  };
  blurFunc2 = () => {
    console.log(this.refs.email.value);
  };
  clicked3 = () => {
    document.getElementById("phno").focus();
  };
  blurFunc3 = () => {
    console.log(this.refs.phno.value);
  };
  clicked4 = () => {
    document.getElementById("website").focus();
  };
  blurFunc4 = () => {
    console.log(this.refs.website.value);
  };
  clicked5 = () => {
    document.getElementById("city").focus();
  };
  blurFunc5 = () => {
    console.log(this.refs.city.value);
  };
  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={this.handleEvent}
          disabled={this.state.clicked}
        >
          Get Form
        </button>
        <br />
        <div>
          {this.state.clicked ? (
            this.state.posts.map((post) => {
              return (
                <div key={post.id}>
                  <form>
                    <label>Name:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.name}
                      onChange={this.nameHandler}
                      id="name"
                      ref="name"
                      onClick={this.clicked}
                      onBlur={this.blurFunc}
                    />
                    <br />
                    <label>Username:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.username}
                      // onChange={this.nameHandler}
                      id="username"
                      ref="username"
                      onClick={this.clicked1}
                      onBlur={this.blurFunc1}
                    />
                    <br />
                    <label>Email:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.email}
                      // onChange={this.nameHandler}
                      id="email"
                      ref="email"
                      onClick={this.clicked2}
                      onBlur={this.blurFunc2}
                    />
                    <br />
                    <label>Phno:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.phone}
                      // onChange={this.nameHandler}
                      id="phno"
                      ref="phno"
                      onClick={this.clicked3}
                      onBlur={this.blurFunc3}
                    />
                    <br />
                    <label>Website:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.website}
                      // onChange={this.nameHandler}
                      id="website"
                      ref="website"
                      onClick={this.clicked4}
                      onBlur={this.blurFunc4}
                    />
                    <br />
                    <label>City:</label>{" "}
                    <input
                      type="text"
                      placeholder={post.address.city}
                      // onChange={this.nameHandler}
                      id="city"
                      ref="city"
                      onClick={this.clicked5}
                      onBlur={this.blurFunc5}
                    />
                    <br />
                    <label className="zipcode">
                      Your zipcode is Based on your city is :
                    </label>
                    <br />
                    <select
                      name="zipcode"
                      id="zipcode"
                      className="zipcode"
                      //onChange={this.func.bind(this)}
                    >
                      <option value="---Your Zip Code is---">
                        ---Your Zipcode---
                      </option>
                      <option>{post.address.zipcode}</option>
                    </select>
                  </form>
                </div>
              );
            })
          ) : (
            <h1>Plz Click on the Button to get Data</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Blog;

// (
//   <Form
//     name={this.state.post.name}
//     username={this.state.post.username}
//     email={this.state.post.email}
//     address={this.state.post.address}
//     phno={this.state.post.phone}
//     website={this.state.post.website}
//   />
// )
