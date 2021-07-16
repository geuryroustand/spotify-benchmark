// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavBar from "./Components/SideNavBar";
import "font-awesome/css/font-awesome.min.css";

import GoogleFontLoader from "react-google-font-loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import MusicPlayer from "./Components/MusicPlayer";

// library.add(fab, faCheckSquare, faCoffee);
function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <SideNavBar />
      <MusicPlayer />
    </>
  );
}

export default App;
