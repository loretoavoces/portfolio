import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrolled: boolean = false;
  @HostListener("window:scroll", [])
    onWindowScroll() { this.scrolled = window.scrollY > 0 }
  constructor() { }

  ngOnInit(): void {
  }

}
