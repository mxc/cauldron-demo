/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import Cualdron from 'cauldron-mvc';
import React from 'react';
import ReactDOM from 'react-dom';

class Name extends Cualdron.BaseChild {
    
    render(){
        return (<div>
                    <input name="lastName" id="lastName" type="text" size="25" 
                        value={this.context.model.firstName}
                        onChange = {this.context.model.setFirstName} /><br/>
                    <input name="firstName" id="firstName" 
                        type="text" size="25" value={this.context.model.lastName}
                        onChange = {this.context.model.setLastName} />                                
               </div>);
    }
    
}

export default Name;