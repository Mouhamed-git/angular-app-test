import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger ;
  sidebar: any;
  closeBtn: any;
  searchBtn: any;


  constructor() { }

  ngOnInit(): void {
    this.sidebar = document.querySelector(".sidebar");
    this.closeBtn = document.querySelector("#btn");
    this.searchBtn = document.querySelector(".bx-search");
    this.closeBtn.addEventListener("click", ()=>{
      this.sidebar.classList.toggle("open");
      this.menuBtnChange();
    });
  }

  menuBtnChange() {
   if(this.sidebar.classList.contains("open")){
     this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     this.closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
}
