import React, {Component} from 'react';

export default class NavBar extends Comment(){

    constructor(){
        super();
        this.state = {
            menu: false
        }
    }

    menu = () => {
        if(this.state.menu === false){
            this.setState({menu: true})
        }else{
            this.setState({menu: false})
        }
    }


    render(){
        return (
            <div>
                <ul>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
    
            </div>
        )
    }
}