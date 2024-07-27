import { FC, useState, ChangeEvent } from "react";
export enum HairColor {
  Blonde = "Ohh ! Nice hair color",
  Black = "Ohh ! Black hair color",
  Brown = "Ohh ! Brown hair color",
}
interface Props {
  name?: string;
  age?: number;
  email?: string;
  hairColor?: HairColor;
}
const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  type NameType = "Aarsh" | "Bharti" | "Hello"
  const nameForType : NameType = "Hello"
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>You are {age} years old.</p>
      <p>You can reach me at {email}.</p>
      <input
        type="text"
        placeholder="Enter your contry"
        onChange={handleChanges}
      />
      {country}
      {hairColor}
      {nameForType}
    </div>
  );
};
export default Person;
