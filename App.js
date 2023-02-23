import React from "react";
import Index from "./Components/intro/Index";
import './app.scss';
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Blogs from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <div>
            <Index />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;