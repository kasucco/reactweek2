import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtext, changedone, deletetext } from "../redux/modules/todos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
import Header from "../component/header";
import Layout from "./layout";
import Form from "./form";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const globalTodos = useSelector((state) => state.todos.todos);

  const deleteHandler = (todoId) => {
    dispatch(deletetext(todoId));
  };

  const onChangeHandler = (todoId) => {
    dispatch(changedone(todoId));
  };

  console.log(globalTodos);
  return (
    <Layout>
      <Header />
      <Form />
      <StListContainer>
        <div>
          <h2>working...</h2>
          <StListWrapper>
            {globalTodos.map((item) => {
              if (item.isDone === false) {
                return (
                  <StTodoContainer key={item.id}>
                    <Stmargin
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      상세보기
                    </Stmargin>

                    <h2>{item.title}</h2>
                    <div>{item.body}</div>
                    <StDialogFooter>
                      <StButton onClick={() => deleteHandler(item.id)}>
                        삭제하기
                      </StButton>
                      <StButton
                        borderColor="green"
                        onClick={() => onChangeHandler(item.id)}
                      >
                        {item.isDone === false ? "완료하기" : "취소하기"}
                      </StButton>
                    </StDialogFooter>
                  </StTodoContainer>
                );
              } else {
                return null;
              }
            })}
          </StListWrapper>
        </div>
        <div>
          <h2>Done!!</h2>
          {globalTodos.map((item) => {
            if (item.isDone === true)
              return (
                <StTodoContainer key={item.id}>
                  <Stmargin
                    onClick={() => {
                      navigate(`/detail/${item.id}`);
                    }}
                  >
                    상세보기
                  </Stmargin>

                  <h2>{item.title}</h2>
                  <div>{item.body}</div>
                  <StDialogFooter>
                    <StButton onClick={() => deleteHandler(item.id)}>
                      삭제하기
                    </StButton>
                    <StButton
                      borderColor="green"
                      onClick={() => onChangeHandler(item.id)}
                    >
                      {item.isDone === false ? "완료하기" : "취소하기"}
                    </StButton>
                  </StDialogFooter>
                </StTodoContainer>
              );
          })}
        </div>
      </StListContainer>
    </Layout>
  );
};

export default Home;
