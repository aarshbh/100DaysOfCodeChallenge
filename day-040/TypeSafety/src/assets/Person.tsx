import React from 'react'

interface Props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];


}

const Person = (props: Props) => {
  return (
    
    <div>
      <h1>Name is : {props.name}</h1>
      <h1>Email is : {props.email}</h1>
      <h1>Age is {props.age}</h1>
      <h1>The person is :{props.isMarried ? "Married" : "Not Married"}</h1>
      {props.friends.map((friends: string) => (
        <h1>{friends}</h1>
      ))}
    </div>
    
  )
}

export default Person
