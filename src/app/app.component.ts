import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: string;
  title = 'remote-image-gallery';

  ngOnInit(): void {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    this.time = dateLocal.toISOString().slice(0, 19).replace(/-/g, '/').replace('T', ' ');
  }
}
