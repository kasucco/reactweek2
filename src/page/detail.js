import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CardBox,
  StContainer,
  StDialog,
  StDialogHeader,
  StButton,
  StTitle,
} from "../shared/styled/common";
import { getTodoByid } from "../redux/modules/todos";
import { useEffect } from "react";
import Layout from "./layout";
import Header from "../component/header";
import Form from "./form";
const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const todo = useSelector((state) => state.todos.todo);
  console.log(todo);
  useEffect(() => {
    dispatch(getTodoByid(id));
  }, []);
  console.log(todo);

  return (
    <Layout>
      <Header />
      <Form />
      <StContainer>
        <StDialog>
          <StDialogHeader>
            <div>{todo.id}</div>
            <StButton onClick={() => navigate("/")}>홈으로</StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StTitle>{todo.body}</StTitle>
        </StDialog>
      </StContainer>{" "}
    </Layout>
  );
};

export default Detail;
