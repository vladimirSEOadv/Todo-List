import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRouts, publicRouts} from "../router/index"

const AppRouter = () => {
    const isAuth = false;
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
                {/*<Navigate to="/posts-page" replace={true} />*/}
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