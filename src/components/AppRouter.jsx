import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRouts, publicRouts} from "../router/index"
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth
            ?
            <Routes>
                {privateRouts.map((route) =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />

                )}

            </Routes>
            :
            <Routes>
                {publicRouts.map((route) =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}

            </Routes>
    );
};

export default AppRouter;