import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1>This is Home Page {username} </h1>
    </div>
  );
};

export default Home;
