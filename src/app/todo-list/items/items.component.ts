import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() 
  item: { count: number; title: string; description: string; } = { count: 0, title: '', description: '' };

  @Output() buttonClick = new EventEmitter<number>();

  delete(count:number): void {
    this.buttonClick.emit(count);
  }

}
