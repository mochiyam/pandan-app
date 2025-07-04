// type PersonData = {
//   name: string;
//   age: number;
//   height: string;
//   weight: string;
//   race: string;
//   isRacist: boolean;
// };

// const data: PersonData = {
//   name: 'moana',
//   age: 31,
//   height:  '150',
//   weight: '50',
//   race: 'yes',
//   isRacist: true
// }

// const {isRacist} = data
// const {isRacist: isR} = data // It's confusing, but : is renaming. (ONLY during destruction)

// const myFunction = (data: PersonData) => {
//   const name = "danial"
//   const {name: secondName} = data;
// }

type Car = {
  model: string;
  is4wd: boolean;
  numberOfTyres: number;
}

type Tyres = {
  brand: string;
  material: string;
}

const car: Car = {
  model: 'audi',
  is4wd: false,
  numberOfTyres: 4
}

const tyres: Tyres = {
  brand: 'dunlop',
  material: 'rubber'
}

const carAndTyres = {...car, ...tyres}
console.log(carAndTyres)