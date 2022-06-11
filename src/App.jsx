import React from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

// 1. Вместо switch теперь необходимо использовать Routes;
//     2. useHistory убрали в router-dom v6 и заменили на useNavige, в котором по умолчанию исп-ся push
//     3.exact не нужен теперь
//     4. в route исп-ся теперь element c указанием компонента, вместо component
//     5.у тебя в видео при рендере массива роутов идет component={route.component} ; у меня рендер массива роутов заработал только после указания в скобках  element={<route.element />}
// 6.Redirect тоже убрали вместо него нужно исп-ть Route с переданным в element  модуля <Navigate /> ,
//     пример с моего кода( <Route path="/*" element={<Navigate to="/login" replace />} />))

//https://youtu.be/GNrdg3PzpJQ?t=8521

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
