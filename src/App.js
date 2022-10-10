import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtext } from "./redux/modules/todo";
const App = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const globalTodo = useSelector((state) => state.todos);

  const onChangeHandler = (event) => {
    const todo = event.target.value;
    setTodo(todo);
  };
  console.log(todo);
  const onClickHandler = () => {
    dispatch(addtext(todo));
  };
  console.log(globalTodo);
  return (
    <div>
      {globalTodo}
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => onClickHandler}>추가하기</button>
    </div>
  );
};

export default App;
