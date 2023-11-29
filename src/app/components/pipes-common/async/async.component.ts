import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  img = new Promise((resolve, reject)=> {
    resolve('https://upload.wikimedia.org/wikipedia/en/0/0a/Kero_Kero_Keroppi_no_Daibouken_Coverart.png')
  });
}
