import React, { Component } from "react";

import Country from "./components/country/Country";
import Search from "./components/search/Search";




export default class App extends Component {
  state = { country: [], search: "" };
  getCountry = () => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => this.setState({ country: data }));
  };
  componentDidMount() {
    this.getCountry();
  }
  onChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div>
        <Search onChangeSearch={this.onChangeSearch}/>
        {this.state.country.length>0&&<Country 
        country={this.state.country}
         search={this.state.search} />}
      </div>
    );
  }
}
