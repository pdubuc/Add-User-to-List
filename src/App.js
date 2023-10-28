import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import "./index.css";

function App() {
  const [userList, setUserList] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (newUser) => {
    if (newUser["user-name"].length === 0 || newUser["user-age"].length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (newUser["user-age"] < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    } else {
      setUserList((prevUsers) => {
        const updatedUsers = [...prevUsers];
        newUser["id"] = Math.random().toString();
        updatedUsers.unshift({
          name: newUser["user-name"],
          age: newUser["user-age"],
          id: newUser["id"],
        });
        console.log("It ran through");
        return updatedUsers;
      });
    }
  };

  const resetHandler = (event) => {
    setUserList("");
  };

  const deleteHandler = (userId) => {
    setUserList((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  const closeErrorMessage = (event) => {
    setError(null);
  };

  let content = "";

  if (userList.length > 0) {
    content = (
      <UsersList
        users={userList}
        resetUserList={resetHandler}
        onDelete={deleteHandler}
      />
    );
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={closeErrorMessage}
        ></ErrorModal>
      )}
      <AddUser onAddUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;