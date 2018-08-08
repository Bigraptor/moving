import React from "react";
import Hometemplate from "components/templates/Home";
import HeaderContainer from "containers/Header/HeaderContainer";
import AsideContainer from "containers/Aside/AsideContainer";

import WrapperContainer from "containers/Home/WrapperContainer";

const Home = () => {
    return (
        <div>
            <Hometemplate header = {<HeaderContainer />}
            aside = {<AsideContainer />}>
                <WrapperContainer />
            </Hometemplate>
        </div>
    );
};

export default Home;