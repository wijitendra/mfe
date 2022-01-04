import React, {useRef,useEffect} from "react";
import { ReactDOM } from "react-dom";
import {mount} from 'marketing/MarketingApp';

const MarketingApp = ()=>{
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    });
    return <div ref={ref} />;
}

export default MarketingApp;