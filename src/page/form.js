import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtext } from "../redux/modules/todos";
import {
  CardBox,
  StAddButton,
  StAddForm,
  StAddInput,
  StFormLabel,
  StInputGroup,
  StListContainer,
  StListWrapper,
  StButton,
  StTodoContainer,
  StDialogFooter,
  Stmargin,
} from "../shared/styled/common";

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    body: "",
    isDone: false,
  });

  const onMakeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, id: Date.now(), [name]: value, isDone: false });
  };

  const onClickHandler = () => {
    dispatch(addtext(todo));
    setTodo({ title: "", body: "" });
  };

  return (
    <StAddForm>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onMakeHandler}
        />
        <label>내용</label>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onMakeHandler}
        />
      </StInputGroup>

      <StAddButton type="button" onClick={() => onClickHandler()}>
        추가하기
      </StAddButton>
    </StAddForm>
  );
};

export default Form;
