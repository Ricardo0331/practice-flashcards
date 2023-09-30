import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Deck from "./Deck";
import Study from "./Study";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";



function Layout() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/decks/:deckId" component={Deck} />
            </Switch>
        </Router>
    );
}


export default Layout;