import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
 
 
  constructor() {
 
   }

  ngOnInit() {
    
    function addition() {
      let a = document.getElementById('premiernb').innerHTML;
      let b = document.getElementById('seconduenb').innerHTML;
      if(document.getElementById('ajout').onclick){
        let add= a + b ;  
      document.getElementById('afficher').innerHTML= add;
       
      }
      
      }



  }

}

