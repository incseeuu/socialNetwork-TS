import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App__item">
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
