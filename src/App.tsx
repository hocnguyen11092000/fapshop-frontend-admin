import { Route, Routes } from "react-router-dom";
import Login from "./layout/login/Login";
import Main from "./layout/main/Main";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<Main></Main>}></Route>
        </Routes>
    );
}

export default App;
