// 객체지향 프로그래밍??? 실제세상을 우리가 필요로 하는걸 프로그래밍화 하는것.
// 객체??
// 추상화: 모든 정보중에서 우리에게 필요한 정보를 남기는것...

class Car {
  // 원본, 틀
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
  }
  drive() {
    console.log("부릉부릉");
  }
}

const avante = new Car({ name: "아반떼", price: 2500, year: 2019 });
const porche = new Car({ name: "포르쉐", price: 7500, year: 2010 });
avante.drive();
porche.drive();

// class App extends React.Component {}
// ReactDOM.render(<App />, document.querySelector("#root"),);

class SuperCar extends Car {
  constructor(options) {
    super(options); //규칙!! -->생성자 실행시켜줌
    console.log("수퍼카가 생겨났어요");
  }
  booster() {
    console.log("부아아아아아아앙앙");
  }
}
const bugati = new SuperCar({
  name: "부가티베이런",
  price: 19243209409,
  year: 2000
});
bugati.drive();
bugati.booster();

// 실습 1
// Monster 클래스의 instance는 생성될 때, health가 100이다.
// constructor는 options라는 인자를 받으며
// options는 name이라는 키가 있다.{name:''}
// Monster를 만들고 피카츄라는 이름을 가진 몬스터를 만들자

class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}
const 피카츄 = new Monster({ name: "피카츄" });
console.log("처음", 피카츄.health);
// 실습2
// Monster 클래스의 자식 클래스 Dinosaur를 만들어주시되, 생성자함수는 같고,
// Dinosaur는 몸통박치기라는 메소드를 갖습니다.
// 몸통박치기는 다른 몬스터 인스턴스를 인자로 받고,
// 결과로 인자로 받은 못느터의 health를 10 깎습니다.
// Tirano.몸통박치기(피카츄)
// =>console.log(피카츄.health)=>90

class Dinosaur extends Monster {
  constructor(options) {
    super(options);
  }
  몸통박치기(monster) {
    monster.health -= 10;
  }
}
const Tirano = new Dinosaur({ name: "티라노" });
Tirano.몸통박치기(피카츄);
console.log("나중:", 피카츄.health);
