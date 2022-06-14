import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routs} from "../router/index"

const AppRouter = () => {
    return (
        <Routes>
            {routs.map((route) =>
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