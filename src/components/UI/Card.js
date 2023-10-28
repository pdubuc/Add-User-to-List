import classes from "./Card.module.css";

const Card = (props) => {
    // Lesson 124. How to apply 2 types of classes - 
    //  a) internal to Card & b) coming in externally
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;