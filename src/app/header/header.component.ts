import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SafeLinkDirective } from '../../safe-link.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, SafeLinkDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
iconShow = signal(true)

onToggle() {
  this.iconShow.update((wasVisible) => !wasVisible)
}
}
