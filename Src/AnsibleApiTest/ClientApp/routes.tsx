import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { PlayerList } from "./components/PlayerList";
import { PlayerSearch } from "./components/PlayerSearch";
import { PlayerAdd } from "./components/PlayerAdd";

export const routes = <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/playerlist" component={PlayerList} />
    <Route path="/playersearch" component={PlayerSearch} />
    <Route path="/playeradd" component={PlayerAdd} />
</Layout>;
