import React from "react";
import { WhyWrite } from 'Components/home/WhyWriteComponent';
import { WhyWriteComponent } from 'Components/home/WriteSmartComponent';
import { HomeBannerComponent } from 'Components/home/HomeBannerComponent';

export const HomePageComponent = () => {
    return (
        <React.Fragment>
            <HomeBannerComponent/>
            <WhyWrite/>
            <WhyWriteComponent/>
        </React.Fragment>
    )
};