// users.js

import { createListCollection } from "@chakra-ui/react";

const users = [
  {
    name: "Ali",
    lastname: "Ahmadi",
    age: 28,
    fathername: "Hossein",
    nationalcode: "0012345678",
    birth: "1997-03-12"
  },
  {
    name: "Reza",
    lastname: "Mohammadi",
    age: 32,
    fathername: "Karim",
    nationalcode: "0012345679",
    birth: "1993-07-25"
  },
  {
    name: "Sara",
    lastname: "Hosseini",
    age: 24,
    fathername: "Ali",
    nationalcode: "0012345680",
    birth: "2001-01-14"
  },
  {
    name: "Mina",
    lastname: "Karimi",
    age: 29,
    fathername: "Reza",
    nationalcode: "0012345681",
    birth: "1996-11-03"
  },
  {
    name: "Hossein",
    lastname: "Rahimi",
    age: 35,
    fathername: "Mahmood",
    nationalcode: "0012345682",
    birth: "1990-05-19"
  },
  {
    name: "Nima",
    lastname: "Ghasemi",
    age: 27,
    fathername: "Javad",
    nationalcode: "0012345683",
    birth: "1998-09-08"
  },
  {
    name: "Fatemeh",
    lastname: "Moradi",
    age: 31,
    fathername: "Hossein",
    nationalcode: "0012345684",
    birth: "1994-02-22"
  },
  {
    name: "Amir",
    lastname: "Yousefi",
    age: 26,
    fathername: "Ahmad",
    nationalcode: "0012345685",
    birth: "1999-12-30"
  },
  {
    name: "Zahra",
    lastname: "Niknam",
    age: 23,
    fathername: "Ali",
    nationalcode: "0012345686",
    birth: "2002-06-17"
  },
  {
    name: "Mehdi",
    lastname: "Soleimani",
    age: 34,
    fathername: "Reza",
    nationalcode: "0012345687",
    birth: "1991-04-09"
  },
  {
    name: "Leila",
    lastname: "Taheri",
    age: 28,
    fathername: "Hossein",
    nationalcode: "0012345688",
    birth: "1997-08-11"
  },
  {
    name: "Saeed",
    lastname: "Nazari",
    age: 36,
    fathername: "Karim",
    nationalcode: "0012345689",
    birth: "1989-10-02"
  },
  {
    name: "Parisa",
    lastname: "Ebrahimi",
    age: 30,
    fathername: "Ahmad",
    nationalcode: "0012345690",
    birth: "1995-03-27"
  },
  {
    name: "Mohammad",
    lastname: "Heidari",
    age: 33,
    fathername: "Hossein",
    nationalcode: "0012345691",
    birth: "1992-01-05"
  },
  {
    name: "Elham",
    lastname: "Jafari",
    age: 25,
    fathername: "Reza",
    nationalcode: "0012345692",
    birth: "2000-09-19"
  },
  {
    name: "Arman",
    lastname: "Shirazi",
    age: 27,
    fathername: "Ali",
    nationalcode: "0012345693",
    birth: "1998-07-07"
  },
  {
    name: "Shirin",
    lastname: "Maleki",
    age: 29,
    fathername: "Hossein",
    nationalcode: "0012345694",
    birth: "1996-12-18"
  },
  {
    name: "Omid",
    lastname: "Kiani",
    age: 38,
    fathername: "Mahmood",
    nationalcode: "0012345695",
    birth: "1987-02-14"
  },
  {
    name: "Maryam",
    lastname: "Noori",
    age: 26,
    fathername: "Karim",
    nationalcode: "0012345696",
    birth: "1999-04-26"
  },
  {
    name: "Pouya",
    lastname: "Ansari",
    age: 31,
    fathername: "Ahmad",
    nationalcode: "0012345697",
    birth: "1994-06-03"
  },
  {
    name: "Hamed",
    lastname: "Bagheri",
    age: 34,
    fathername: "Ali",
    nationalcode: "0012345698",
    birth: "1991-08-29"
  },
  {
    name: "Nasim",
    lastname: "Khalili",
    age: 22,
    fathername: "Hossein",
    nationalcode: "0012345699",
    birth: "2003-05-21"
  },
  {
    name: "Majid",
    lastname: "Salimi",
    age: 37,
    fathername: "Karim",
    nationalcode: "0012345700",
    birth: "1988-11-13"
  },
  {
    name: "Samira",
    lastname: "Hashemi",
    age: 28,
    fathername: "Reza",
    nationalcode: "0012345701",
    birth: "1997-01-30"
  },
  {
    name: "Ehsan",
    lastname: "Norouzi",
    age: 35,
    fathername: "Ahmad",
    nationalcode: "0012345702",
    birth: "1990-07-15"
  },
  {
    name: "Azadeh",
    lastname: "Sharifi",
    age: 24,
    fathername: "Ali",
    nationalcode: "0012345703",
    birth: "2001-03-10"
  },
  {
    name: "Vahid",
    lastname: "Farhadi",
    age: 33,
    fathername: "Hossein",
    nationalcode: "0012345704",
    birth: "1992-09-01"
  },
  {
    name: "Golnaz",
    lastname: "Abbasi",
    age: 27,
    fathername: "Karim",
    nationalcode: "0012345705",
    birth: "1998-02-25"
  },
  {
    name: "Iman",
    lastname: "Zarei",
    age: 30,
    fathername: "Ahmad",
    nationalcode: "0012345706",
    birth: "1995-10-20"
  },
  {
    name: "Neda",
    lastname: "Piri",
    age: 26,
    fathername: "Hossein",
    nationalcode: "0012345707",
    birth: "1999-06-06"
  },
  {
    name: "Kaveh",
    lastname: "Rostami",
    age: 39,
    fathername: "Ali",
    nationalcode: "0012345708",
    birth: "1986-04-04"
  },
  {
    name: "Yasmin",
    lastname: "Davoodi",
    age: 23,
    fathername: "Karim",
    nationalcode: "0012345709",
    birth: "2002-08-18"
  },
  {
    name: "Farhad",
    lastname: "Akbari",
    age: 41,
    fathername: "Hossein",
    nationalcode: "0012345710",
    birth: "1984-01-09"
  },
  {
    name: "Roya",
    lastname: "Khosravi",
    age: 29,
    fathername: "Ahmad",
    nationalcode: "0012345711",
    birth: "1996-05-12"
  },
  {
    name: "Behnam",
    lastname: "Najafi",
    age: 36,
    fathername: "Ali",
    nationalcode: "0012345712",
    birth: "1989-09-27"
  },
  {
    name: "Taraneh",
    lastname: "Safari",
    age: 25,
    fathername: "Hossein",
    nationalcode: "0012345713",
    birth: "2000-11-05"
  },
  {
    name: "Shahab",
    lastname: "Khani",
    age: 32,
    fathername: "Karim",
    nationalcode: "0012345714",
    birth: "1993-02-16"
  },
  {
    name: "Mahsa",
    lastname: "Lotfi",
    age: 28,
    fathername: "Ahmad",
    nationalcode: "0012345715",
    birth: "1997-07-22"
  },
  {
    name: "Sina",
    lastname: "Rajabi",
    age: 34,
    fathername: "Hossein",
    nationalcode: "0012345716",
    birth: "1991-12-01"
  },
  {
    name: "Negar",
    lastname: "Mirzaei",
    age: 27,
    fathername: "Ali",
    nationalcode: "0012345717",
    birth: "1998-03-28"
  }
];

const allUsers = createListCollection({
    items : users
})


export default allUsers;


// or if you want named export
// export { users };
