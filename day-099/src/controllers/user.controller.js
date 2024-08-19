import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models";
import { ApiResponse } from "../utils/ApiResponse";


const registerUser = asyncHandler( async (req , res )=> {
    
  const {fullName, email, username, password} = req.body
  console.log("email: ",email);

  // if (
  //   [fullName, email, username, password].some((field) => 
  //   field.trim() === "")
  // ) {
  //     throw new ApiError("Fields cannot be empty", 400)
  // }

  // const existedUser = User.findOne({
  //   $or: [{username}, {email}]
  //  })


  if (existedUser) {
    throw new ApiError(409,"User already exist.")
  }
   
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required.");
  }

 const avatar = await uploadOnCloudinary(avatarLocalPath)
 const coverImage = await uploadOnCloudinary(coverImageLocalPath)


 if (!avatar) {
  throw new ApiError(400, "Avatar file is required.")
 }

const user = await User.create({
  fullName,
  avatar: avatar.url,
  coverImage: coverImage?.url || "",
  password,
  username: username.toLowerCase()
 })

 const createdUserName = User.findById(user._id).select(
  "-password -refreshToken"
 )

 if (createdUser) {
  throw new ApiError(500,
    "Something went wrong while registering the user ")
 }

 return res.status(201).json(
  new ApiResponse(200, createdUser, "User registered successfully")
 )

})

export {registerUser};