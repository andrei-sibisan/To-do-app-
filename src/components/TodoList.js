import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  console.log("TodoList level: ", todoList);
  return (
    <div>
      {todoList.map((item) => (
        <Todo
          key={item.id}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
