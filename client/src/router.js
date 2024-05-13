import HomePage from "./pages/user/homePage";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom"

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
    ]
    return (
        <Routes>
            {
                userRouters.map((item, key) =>
                    <Route key={key} path={item.path} element={item.component} />)
            }
        </Routes>
    )
}
const RouterCustom = () => {
    return renderUserRouter;
}
export default RouterCustom;