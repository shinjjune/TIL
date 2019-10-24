// const promise = new Promise((resolve, reject) => {
//   // Async 작업...
//   resolve("성공했어요!");
//   reject("실패했어요");
// });

// promise.then(result => console.log(result)).catch(error => console.log(error));
// const getAccount = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 100);
//     //0~99 까지의 수를 랜덤하게 뽑아냅니다.
//     if (number % 2 === 1) resolve({ id: 1, balance: 1500 });
//     else reject(new Error("계좌에 접근 X"));
//   }, 2000);
// });
// getAccount.then(result => console.log(result)).catch(err => console.error(err));

//  callback => promise ??

function getUser(id) {
  console.log("유저를 찾고 있습니다...");
  const users = [{ id: 1, githubID: "auba" }, { id: 2, githubID: "laca" }];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error("유저를 찾을 수 없네;;;"));
    }, 2000);
  });
}

function getRepo(githubID) {
  console.log("Github 리포를 찾는 중입니다...");
  const repos = [
    { githubID: "auba", commitID: 1 },
    { githubID: "laca", commitID: 2 }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.githubID === githubID);
      if (repo) resolve(repo);
      else reject(new Error("리포를 찾을수 없어요...ㅜㅜ"));
    }, 2000);
  });
}

function getCommit(CommitID) {
  console.log("CommitID를 찾는 중입니다.");
  const commits = [
    { CommitID: 1, contents: "겨울을 걷는다." },
    { CommitID: 2, contents: "니가보고싶은 밤." }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commit = commits.find(commit => commit.CommitID === CommitID);
      if (commit) resolve(commit);
      else reject(new Error("커밋 어딨냐...ㅡㅡ"));
    }, 2000);
  });
}

const test = getUser(1)
  .then(user => getRepo(user.githubID))
  .then(repo => getCommit(repo.commitID))
  .then(commit => console.log(commit))
  .catch(err => console.error(err));
console.log(test);
