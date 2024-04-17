import { Component } from '@angular/core';

export class MyObject {
  count: number;
  title: string;
  description: string;

  constructor(count: number, title: string, description: string) {
    this.count = count;
    this.title = title;
    this.description = description;
  }
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title:string = '';
  desc:string = '';
  count:number=1
  list: MyObject[] = []; 

  submit () {
    this.list.push(new MyObject(this.count, this.title, this.desc));
    this.count+=1;
  }

  onDelete(count: number): void {
    // console.log('Button in c2 clicked with argument:', count);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].count == count) {
        this.list.splice(i, 1)
      };
      
    }
    count = this.list.length;
  }
}
