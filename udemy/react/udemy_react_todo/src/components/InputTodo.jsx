const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
    return (
        <div style={style}>
            <input disabled={disabled} type="text" name="todo-name" id="todo-name" placeholder="todoを入力" value={todoText} onChange={onChange} />
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    )
}