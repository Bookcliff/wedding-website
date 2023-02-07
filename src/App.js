import { Link } from "react-router-dom";
import { Button } from "antd";
import largeWeddingLogo from "./pictures/largeWeddingLogo.webp";
import "./App.less";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={largeWeddingLogo}
          className="wedding-logo"
          alt="weddinglogo"
          height="50%"
        />
        <Button className="appButton">
          <Link to="pages/weddingInfo">
            Come celebrate the marriage of Russell and Grace
          </Link>
        </Button>
      </header>
    </div>
  );
}
