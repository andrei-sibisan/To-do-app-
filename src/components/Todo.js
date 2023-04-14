import styles from "../style.module.css";

const Todo = ({ item, todoList, setTodoList }) => {
  // console.log(todoList);
  const handleDelete = (event) => {
    // event.preventDefault();
    console.log("pressed delete");
    setTodoList(todoList.filter((elem) => item.id !== elem.id));
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{item.name}</h3>
        <button onClick={handleDelete} className={styles.deletebutton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
