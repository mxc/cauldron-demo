/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Cauldron from 'cauldron-mvc';
import React from 'react';
import ReactDOM from 'react-dom';

class DemoModel extends Cauldron.BaseModel{
      
      constructor(){
          super();
          this.firstName ="Mark";
          this.lastName ="Clarke";
          this.total=0;
          this.time = new Date();
          window.setInterval(()=>{
              this.time=new Date();
              this.fireUpdateEvent();
              
          },1000);
      }
//      
//      add=(num)=>{
//          this.total+=num;
//          this.fireUpdateEvent();
//      }
//      
//      subtract = (num) =>{
//          this.total-=num;
//          this.fireUpdateEvent();
//      }
      
      setFirstName = (e) =>{
          if (e.target){
              this.firstName=e.target.value;
          } else{
              this.firstName = e;
          }
          this.fireUpdateEvent();
      }
      
      setLastName = (e) =>{
          if (e.target){
              this.lastName=e.target.value;
          } else{
              this.lastName = e;
          }
          this.fireUpdateEvent();
      }
    
}

export default DemoModel;
