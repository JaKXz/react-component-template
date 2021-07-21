import { ExampleComponent } from "react-component-template";
import { version } from "react-component-template/package.json";
import "react-component-template/dist/index.css";

const App = () => {
  return <ExampleComponent text={`react-component-template 🎉 v${version}`} />;
};

export default App;
