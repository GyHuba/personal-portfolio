import LandingPage from "./pages/LandingPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <div className="App">
        <LandingPage />
        <AnimatedCursor
          innerSize={0}
          showSystemCursor={true}
          outerSize={10}
          color="255,189,89"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={8}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    </>
  );
}

export default App;
