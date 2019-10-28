/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Segment from "./components/Segment";
import Message from "./components/Message";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

class App extends React.Component {
  state = {
    comments: [],
    body: faker.lorem.paragraph()
  };
  handleAddcomment = () => {
    const newComment = {
      author: faker.name.firstName(),
      time: faker.date.recent().toLocaleDateString(),
      body: faker.lorem.sentence(),
      avatar: faker.image.avatar()
    };
    this.setState({ comments: [...this.state.comments, newComment] });
  };

  render() {
    console.log("re render");
    return (
      <>
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon">No Document</i>
          </div>

          <div className="ui primary button"> Add Document</div>
        </Segment>

        <Segment>
          <h4 className="ui header">For your information! </h4>
          <p>{this.state.body}</p>
        </Segment>

        <Message header="회원 약관 변경" body="약관이 변경 되었습니다. 동의?" />
        <div className="ui container comments">
          <button className="ui primary button" onClick={this.handleAddcomment}>
            코멘트 추가
          </button>
          <ApprovalCard>
            <h4>저는 오늘 복습합니다.</h4>
            <p>읗헬헤헤헤</p>
          </ApprovalCard>

          {this.state.comments.map(comment => (
            <ApprovalCard>
              <CommentDetail {...comment} />
            </ApprovalCard>
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
