
import Person from "./TypeScript Components/Person";
import { HairColor } from "./TypeScript Components/Person";


const App  = () => {
  return (
   
    <div className="App">
      <Person
        name="Aarsh"
        age={21}
        email="aarshbharti123@gmail.com"
        hairColor={HairColor.Black}
      />
    </div>
  
  );
};

export default App;


