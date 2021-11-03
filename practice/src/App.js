import "./App.css";
import BaiTapInput from "./components/BaiTapInput";
import CheckBoxForm from "./components/CheckBoxForm";
import InputForm from "./components/InputForm";
import RadioForm from "./components/RadioForm";
import TodoList from "./components/hooks/TodoList";
import UseEffect from "./components/hooks/UseEffect";

function App() {
  return (
    <div className="App">
      {/* <BaiTapInput />
      <h4>-----------</h4>
      <h2>------- Làm việc với Form -------</h2>
      <InputForm />
      <h4>-----------</h4>
      <RadioForm />
      <h4>-----------</h4>
      <CheckBoxForm />
      <h2>------- Todo List-------</h2>
      <TodoList /> */}
      <h2>------- Use Effect -------</h2>
      <UseEffect />
    </div>
  );
}

export default App;
