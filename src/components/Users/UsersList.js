import React from "react";
import styles from "./UsersList.module.css";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.map((user) => (
        <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
          {user.name} ({user.age} years old)
        </UserItem>
      ))}
      <Button type="button" onClick={props.resetUserList}>
        Reset
      </Button>
    </Card>
  );
};

export default UsersList;
