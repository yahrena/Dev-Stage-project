import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";
import { Container } from 'react-bootstrap';
import SideFalse from "../Sidebar/styleFalse";
import HomePage from "../../pages/HomePage";

const Layout = ({ children }) => {
    return (
        <>
            {/* <HomePage /> */}
            <SLayout>
                <Sidebar />
                <Container><SMain>{children}</SMain></Container>
            </SLayout>
        </>
    );
};

export default Layout;
