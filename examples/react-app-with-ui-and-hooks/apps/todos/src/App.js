import ExampleComponent from "@my/ui";
import { useInput } from "@my/hooks";

function App() {
  const nameInput = useInput("monorepo");

  return (
    <div>
      <div>
        <input placeholder="name" {...nameInput} />
      </div>
      <div>
        <ExampleComponent text={`Hello, ${nameInput.value}`} />
      </div>
    </div>
  );
}

export default App;
