const age= (currentAge : number) => {
    return currentAge + 1;
};

const oneyearlater : number = age(21);

console.log(oneyearlater);




let programmingLanguages : string[] = ["java" , "python" , "C#"];

programmingLanguages.push("golang");

console.log(programmingLanguages);




interface IUser {
    name: string;
    email: string;
    age: number;
    ismarried: boolean;
    ageLater ?: number;
}


const fetchData = (apiUrl : string) : Promise<IUser> => {
    return fetch(apiUrl).then((response) => response.json());
};

const data = fetchData("myAwsomeApi.com/data/subscribe");


