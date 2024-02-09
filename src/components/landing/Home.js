import "./Home.css";
import { Link } from "react-router-dom";
import StadiumAtNight from "../assets/StadiumAtNight.mp4";

const Home = () => {
  return (
    <div className="video-container">
      <video className="stadium" src={StadiumAtNight} autoPlay loop muted />

      <div className="enter-app">
        <h1>Welcome</h1>
        <Link to="/enterapp">
          <button className="large-button">Enter App</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
