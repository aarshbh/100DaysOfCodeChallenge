import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

interface CreateFormData {
    title: string,
    description: string,

}
const CreateForm = () => {

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title"),
        description: yup.string().required("You must add a description"),
         
    });

    const { register ,handleSubmit , formState: { errors } } = useForm<CreateFormData> ({
        resolver: yupResolver(schema),
    });


    const onCreatePost = (data: CreateFormData) => {
console.log(data);
    };
  return (
    <div>
      <form onSubmit={handleSubmit (onCreatePost)}> 
        <input placeholder="Title" {...register("title")}/>
<p style={{color: "red"}}> {errors.title?.message} </p>
        
        <textarea placeholder="Description" {...register("description")} />
        <input type="submit" />
<p style={{color: "red"}}> {errors.description?.message} </p>
         </form>
    </div>
  );
};

export default CreateForm;
