import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public title: string;
	public subtitle : string;
	public github: string
  constructor() { 
  		this.title = "John E. Aragon"
  		this.subtitle = "Desarrollador Web"
  		this.github="https://github.com/JohnAragon"
  }

  ngOnInit() {
  }

}
