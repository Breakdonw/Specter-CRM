import React, { useState } from 'react';


class TopNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ver:0
        };
    };

    
    
    
    
render() {
    return (  
        <header>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="nav navbar-nav">
                    <a class="nav-item nav-link active" href="#" aria-current="page">Specter <span class="visually-hidden">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Home</a>
                    
                </div>
            </nav>
        </header>
    );
    }
}

export default TopNav;
