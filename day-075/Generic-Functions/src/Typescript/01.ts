
// function getFirstElement(array: (number | string)[] ){
//     return array[0]
//   }
  
//   const number = [1,2,3,];
//   const firstNum = getFirstElement(number);
  
//   const string = ["a","b","c"]
//   const firstString = getFirstElement(string);
//   console.log(firstNum);
//   console.log(firstString);


function getFirstElement<ElementType>(array: ElementType[] ){
    return array[0]
  }
  
  const number = [1,2,3,];
  const firstNum = getFirstElement(number);
  
  const string = ["a","b","c"]
  const firstString = getFirstElement(string);
  console.log(firstNum);
  console.log(firstString);

  const map =  new Map<string, Map<string,number>>()
  console.group(map);

  type ApiResponse<Data> = {
    data : Data
    isError : boolean
  }

type UserResponse = ApiResponse<{name: string; age:number}>
type AnotherUserResponse = ApiResponse<{title: string}>


  const response: UserResponse = {
    data: {
        name: "Aarsh",
        age : 21,
    },
    isError: false,
  }
  console.log(response);


  const AnotherResponse: AnotherUserResponse = {
    data: {
        title: "TypeScript"
    },
    isError: false,
  }
  console.log(AnotherResponse);