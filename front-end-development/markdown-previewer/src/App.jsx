import { useState } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

function App() {
  const [code, setCode] = useState("");

  return (
    <div className="app">
      <Editor setCode={setCode} />
      <Previewer code={code} />
    </div>
  );
}

export default App;
