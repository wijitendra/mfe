import React from "react";
import ReactDOM from "react-dom";
import { Switch,Route,BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Landing from './Landing';
import Pricing from "./Pricing";

export default ()=>{
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}