async function getInfo() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubID);
  const commit = await getCommit(repo.commitID);
  console.log(commit);
}
// getInfo();

// IIFE(Immediately Invoked Function Expressions) : 즉시호출함수
(async function() {
  try {
    const user = await getUser(1);
    const repo = await getRepo(user.githubID);
    const commit = await getCommit(repo.commitID);
    console.log(commit);
  } catch (error) {
    console.error(error);
  } finally {
    //   unconnectDB();
    console.log("연결이 해지되었습니다.");
  }
})();

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
