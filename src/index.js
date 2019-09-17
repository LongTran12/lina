import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import 'antd/dist/antd.css';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapSiteContext from './contexts/siteContext';
import Header from './components/Header';
import Footer from './components/Footer'
import Qa from './pages/Qa';
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Wrap() {
    return (
        <WrapSiteContext>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/q&a" component={Qa} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </WrapSiteContext>
    );
}
ReactDOM.render(<Wrap />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
