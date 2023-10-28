import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCancel}></div>
      <Card className={styles.modal}>
        <div>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            {props.message}
          </div>
          <footer className={styles.actions}>
            <Button type="button" onClick={props.onCancel}>
              Okay
            </Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
