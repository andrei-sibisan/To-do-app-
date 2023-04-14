import { nanoid } from "nanoid";

import styles from "../style.module.css";

const Form = ({ setTodo, todo, setTodoList, todoList }) => {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { id: nanoid(10), name: todo }]);
    setTodo("");
    // console.log(todoList);
  };

  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          placeholder="add to do item"
        ></input>
        <button type="submit" className={styles.todobutton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
