console.log("코드시작!");
const user = getUser(1); // user를 찾고 repo를 찾고 commit을 찾을래!!
const userCallback = getUserCallback(1, user => {
  console.log("id=1번의 유저를 찾고있습니다.");
  getRepo(user.githubID, repo => {
    console.log("레포를 찾고있습니다.");
    getCommits(repo.commitID, commit => {
      console.log("커밋를 찾고있습니다.");
      console.log("commmit: ", commit);
    });
    console.log("repo", repo);
  });
  console.log("user: ", user);
});
console.log(user);
console.log("코드끝!");

const users = [{ id: 1, githubID: "auba" }, { id: 2, githubID: "laca" }];
function getUser(id) {
  //DB에 접속해서 유저를 찾는 함수
  let user;
  setTimeout(() => {
    return users.find(user => user.id === id);
  }, 2000);
  return user;
}
function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}
function getRepo(githubID, callback) {
  const repos = [
    { githubID: "auba", commitID: 1 },
    { githubID: "laca", commitID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}
function getCommits(commitID, callback) {
  const commits = [
    { commitID: 1, contents: "안녕하세요." },
    { commitID: 2, contents: "반갑습니다." }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitID === commitID);
    callback(commit);
  }, 2000);
}
