import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/App';
const mount = (el)=>{
    ReactDOM.render(
        <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development'){
    let el = document.querySelector('#_marketing-dev-root');
    if(el){
        mount(el);
    }
}

export {mount};