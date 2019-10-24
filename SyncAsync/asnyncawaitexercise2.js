// getCustomer(1, customer => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies(movies => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });
(async function() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log("Top movies: ", topMovies);
    await sendEmail(customer.email, topMovies);
    console.log("Email sent...");
  }
})();

function getCustomer(id) {
  console.log("유저를 찾고있습니다...");
  return new Promise(resovle => {
    setTimeout(() => {
      resovle({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      });
    }, 2000);
  });
}

function getTopMovies() {
  console.log("영화찾는중...");
  return new Promise(resovle => {
    setTimeout(() => {
      resovle(["movie1", "movie2"]);
    }, 2000);
  });
}
function sendEmail(email, movies) {
  return new Promise(resovle => {
    setTimeout(() => {
      resovle();
    }, 2000);
  });
}
