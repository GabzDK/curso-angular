import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  private id: string;

  constructor(private router: Router) {
  }

  getIdCurso() {
    this.id = (document.getElementById("idCurso") as HTMLInputElement).value
    this.router.navigate(['/curso/',this.id])
  }
}
