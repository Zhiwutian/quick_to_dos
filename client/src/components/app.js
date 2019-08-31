import React from 'react';
import '../assets/css/app.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import ApiTest from "./api_test";

const App = () => (
    <div className="app">
        <h1 className="text-center">Quick To Dos</h1>
        <ApiTest/>
    </div>
);

export default App;
