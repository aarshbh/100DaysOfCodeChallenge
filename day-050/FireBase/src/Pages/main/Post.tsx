import {Post as Ipost} from "./Main";
interface Props {
post: Ipost;

}

const Post = (props: Props) => {
    const Post =props;

  return (
    <div>
      <div className="title">
        <h1>{Post.title}</h1>
      </div>
      <div className="body">
        <p>{Post.description}</p>
      </div>
    </div>
  )
}

export default Post
