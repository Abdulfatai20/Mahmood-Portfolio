import { Component, signal } from '@angular/core';
import { ProjectModalComponent } from "../project-modal/project-modal.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
onClickProject = signal(false)
onStart() {
  this.onClickProject.set(true)
}
onClose(){
  this.onClickProject.set(false)
}
}
