import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { PlayerList } from "./components/PlayerList";
import { PlayerSearch } from "./components/PlayerSearch";

export const routes = <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/playerlist" component={PlayerList} />
    <Route path="/playersearch" component={PlayerSearch} />
</Layout>;
