import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p>
        If your interested in learning more about me, why not check out the
        <Link to="/about">About</Link> page!
      </p>
    </div>
  );
};
