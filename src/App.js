import React from "react";
import "./App.scss";

import Header from "./Header";
import Search from "./Search";
import Services from "./Services";
import Footer from "./Footer";

export default () => (
    <div>
        <Header />
        <div className="container">
            <div className="alert alert-info" style={{ display: "none" }}>
                <strong>Holder de ord</strong> legges ned i løpet av 2020. Denne
                tjenesten vil ikke bli oppdatert.
            </div>
        </div>

        <Search />
        <Services />
        <Footer />
    </div>
);
