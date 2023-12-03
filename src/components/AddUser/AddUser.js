import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const initialUser = {
    "user-name": "",
    "user-age": "",
    id: 1,
  };
  const [enteredValue, setEnteredValue] = useState(initialUser);
  const [isEmpty, setIsEmpty] = useState(false);
  const [invalidAge, setInvalidAge] = useState(false);

  // Using a single function to capture values from all 2 input fields
  const userChangeHandler = (input, value) => {
    setEnteredValue((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredValue);
    setEnteredValue(initialUser);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="user-name">User Name</label>
        <input
          onChange={(event) =>
            userChangeHandler("user-name", event.target.value)
          }
          value={enteredValue["user-name"]}
          type="text"
          id="user-name"
        />
        <label htmlFor="user-age">Age (Years)</label>
        <input
          onChange={(event) =>
            userChangeHandler("user-age", event.target.value)
          }
          value={enteredValue["user-age"]}
          type="number"
          id="user-age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
