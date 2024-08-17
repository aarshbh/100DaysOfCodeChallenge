import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models";

const registerUser = asyncHandler( async (req , res )=> {
    
  const {fullName, email, user, password} = req.body
  console.log("email: ",email);

  if (
    [fullName, email, username, password].some((field) => 
    field.trim() === "")
  ) {
      throw new ApiError("Fields cannot be empty", 400)
  }

  const existedUser = User.findOne({
    $or: [{username}, {email}]
   })

   

})

export {registerUser};