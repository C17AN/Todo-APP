import ToggleButton from "@/components/common/SortByButton";
import Text from "@/components/common/Text";
import { Todo } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { useState } from "react";

import TodoListItem from "../../../common/TodoListItem";
import CompletedTodoListItem from "../TodoList/CompletedTodoListItem";

type Props = {
  todoList: Todo[];
};

type SortByCondition = "우선순위" | "마감일";

const TodoSection = ({ todoList }: Props) => {
  const toggleSortByCondition = () => {
    if (sortByCondition === "마감일") setSortByCondition(() => "우선순위");
    else if (sortByCondition === "우선순위") setSortByCondition(() => "마감일");
  };

  const [sortByCondition, setSortByCondition] =
    useState<SortByCondition>("우선순위");

  return (
    <Container className="main-middle-section">
      <div className="main-middle-section__title-container">
        <Text
          typography="h3"
          fontWeight="semibold"
          color={colors.darkText.primary}
        >
          다가오는 일정
        </Text>
        <ToggleButton
          onClick={toggleSortByCondition}
          toggleOptions={["우선순위", "마감일"]}
        />
      </div>
      <ul>
        {todoList.map((todo, index) => {
          if (index === 0) {
            return <CompletedTodoListItem key={todo.title + index} {...todo} />;
          } else return <TodoListItem key={todo.title + index} {...todo} />;
        })}
      </ul>
    </Container>
  );
};

const Container = styled.section`
  .main-middle-section__title-container {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .sortby-condition-button {
      margin-left: auto;
      font-size: 0.625rem;
      min-width: 3rem;
      border: 0;
      outline: 0;
      padding: 4px 8px;
      font-weight: 600;
      border-radius: 4px;
      background: ${colors.grey["200"]};
      color: ${colors.darkText.secondary};
    }
  }
`;

export default TodoSection;
