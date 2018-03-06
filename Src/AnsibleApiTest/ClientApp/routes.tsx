import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { PlayerList } from "./components/PlayerList";

export const routes = <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/playerlist" component={PlayerList} />
</Layout>;
