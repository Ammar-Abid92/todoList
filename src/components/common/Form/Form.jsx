import React from "react";
import "./Form.css";

function Form(props) {


  const [form, setFormData] = React.useState("")

  function handleChange(e){
    setFormData(prevData => e.target.value )
  }

  function addItem(event) {
    if (form !== "") {
      var newItem = {
        text: form,
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        key: Date.now(),
        isDone: false,
        isCheck: false
      };
      props.addTask(newItem);
    }
    event.preventDefault();
  }

  return (
    <div className="Form-container">
      <form className="Form-container_form" onSubmit={addItem}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter a Task"
          name="text"
          value={form}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
