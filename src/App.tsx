import {UsersPage} from "./pages/UsersPage.tsx";
import {EditUserPage} from "./pages/EditUserPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersPage/>}/>
                <Route path="/edit" element={<EditUserPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
