/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import Cauldron from 'cauldron-mvc';
import React from 'react';
import ReactDOM from 'react-dom';

class Time extends Cauldron.BaseChild {
    
    render(){
       return (<div>{this.context.model.time.toString()}</div>);
    }
    
}

export default Time;