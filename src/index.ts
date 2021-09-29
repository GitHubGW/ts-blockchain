const handlePerson = (name: string, age: number, gender?: string): void => {
  console.log(`name: ${name} age: ${age} gender: ${gender}`);
};

handlePerson("GW", 25, "male");

export {};
