## Typescript Blockchain

#### index.ts

```typescript
class Person {
  public name: string;
  private age: number;
  public gender: string;

  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Person("GW", 20, "male");
console.log(person);

const handlePerson = (person: Person): void => {
  console.log(person.name, person.age, person.gender);
};

handlePerson(person);

export {};
```