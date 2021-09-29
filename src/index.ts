interface Person {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "GW",
  age: 20,
  gender: "male",
};

const handlePerson = (person: Person): void => {
  console.log(person.name, person.age, person.gender);
};

handlePerson(person);

export {};
