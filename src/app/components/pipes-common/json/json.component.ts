import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  persona = {
    nombre: "Yirsis",
    edad: 21,
    ocupacion: "developer"
  }
}
