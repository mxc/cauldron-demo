/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import DemoModel from './demo-model';
import Name from './name';
import Time from './time';
import React from 'react';
import ReactDOM from 'react-dom';
import Cauldron from 'cauldron-mvc';

class App extends Cauldron.BaseController {
    
    constructor(props,context){
        var demo = new DemoModel();
        super(props,context,demo);
    }
    
    render(){
            return (<div>
                    <div>    
                        <div>First Name:{this.state.model.firstName? this.state.model.firstName: "Please enter a first name"}
                        </div>
                            <div>Last Name:{this.state.model.lastName? this.state.model.lastName: "Please enter a last name"}
                        </div>
                    </div>
                    <Time />
                    <Name />
                    </div>);
        }
}

export default App;
