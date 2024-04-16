import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() 
  item: { count: number; title: string; description: string; } = { count: 0, title: '', description: '' };


}
