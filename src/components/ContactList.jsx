import { useContext } from "react";
import { addUser } from "../context/user-context/actions";
import UsersContext from "../context/user-context/UsersContext";

function ContactList() {
    const { dispatch } = useContext(UsersContext);

    return <button onClick={() => dispatch(addUser(1))}>addUser</button>;
}

export default ContactList;
