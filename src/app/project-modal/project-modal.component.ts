import { Component, output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
cancel = output()
onCancel() {
  this.cancel.emit()
}
}
