import React from 'react';
import {Route, Routes} from "react-router-dom";

import {routs} from "../router/index"
console.log(routs)
const AppRouter = () => {
    return (
        <Routes>
            {routs.map((route, index) =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={index+1}
                />
            )}
        </Routes>
    );
};

export default AppRouter;