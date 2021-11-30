import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';

import State from './Pages/State/State'
import Ant from './Pages/Ant/Ant'
import Home from './Pages/Home/Home'
import Tree from './Pages/Tree/Tree'
import Debug from './Pages/Debug/Debug'

import Header from './Components/Header/Header'

import { UserOutlined, TeamOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">

      {/* <StyleChecker /> */}
      <div id="box">

        <div id="up">
          <Link to="/"><img src="logo.png" alt="Application Logo" /></Link>
          <Link to="/"><h2>АПД <span><Header /></span></h2></Link>
          
        </div>

        <div id="middle">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech/state" element={<State />} />
            <Route path="/tech/ant" element={<Ant />} />
            <Route path="/tech/tree" element={<Tree />} />
            <Route path="/debug" element={<Debug />} />
            <Route path="/*" element={<Debug />} />
          </Routes>



        </div>
        <div id="bottom">
          <div className="bottom-col">
            <Link to="/"><p> <MenuUnfoldOutlined /> Навигатор</p></Link>
            <Link to="/tech/state"><p>Состояние</p></Link>
          </div>
          <div className="bottom-col">
            <Link to="/Page2"><p>Стиль-контроль</p></Link>
          </div>
          <div className="bottom-col">
            <p><UserOutlined /> Administrator/User name</p>
            <p><TeamOutlined /> User group name</p>
          </div>
        </div>
        <div id="bottom-2">
          &#169; БББ "Архив Программной Документации" 2021
        </div>
      </div>






    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About</h2>
        <p>/about</p>
      </main>
    </>
  );
}



export default App;
