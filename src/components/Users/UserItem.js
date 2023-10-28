// import './UserItem.css';

const UserItem = props => {

//   const deleteHandler = () => {
//     // setDeleteText('(Deleted!)');
//     props.onDelete(props.id);
//   };

  return (
    <p>
      {props.children}
    </p>
  );
};

export default UserItem;