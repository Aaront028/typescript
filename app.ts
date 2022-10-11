// const person: {
//   name: string;
//   age: number;
// }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Aaron",
  age: 30,
  hobbies: ['Music', 'Cooking', 'Planting'],
  role: [2, 'author']
}

// person.role.push('admin')
// person.role[1] = 10 // this is allowed

person.role = [0, 'admin', 'user'];

let favouriteActivities: string[];
// ------ below gives you the benefits of anytype (back into javascript world)
// let favouriteActivities: any[]; 
favouriteActivities = ['Sports']

console.log(person.role)

for (const hobby of person.hobbies) {
  console.log(hobby);
}