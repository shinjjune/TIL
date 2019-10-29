import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

// const data = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball"
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch"
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5"
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
// ];

class App extends React.Component {
  // state 적용시 class 사용
  state = {
    keyword: "",
    checked: false,
    data: null
  };
  async getData(url) {
    const res = await axios.get(url);
    const { data } = res; //const data = res.data;
    data.sort((aa, bb) => {
      return aa.category < bb.category ? -2 : 2;
    });
    this.setState({ data }); //this.setState({data:data})
  }
  componentDidMount() {
    // API를 찔러서 데이터를 가져오는 일을 할 겁니다.
    const url = "https://frozen-ocean-08299.herokuapp.com";
    this.getData(url);
  }

  handleKeywordChange = word => {
    this.setState({ keyword: word });
  };
  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <>
        <SearchBar
          handleKeywordChange={this.handleKeywordChange}
          handleChecked={this.handleChecked}
        />
        <ProductTable
          data={this.state.data}
          keyword={this.state.keyword}
          checked={this.state.checked}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
