import ContactList from "./components/ContactList";
import { UsersDataProvider } from "./context/user-context/UsersContext";

function App() {
    return (
        <>
            <UsersDataProvider>
                <ContactList />
            </UsersDataProvider>
        </>
    );
}

export default App;
