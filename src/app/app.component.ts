import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client Queue Example';
  queue_complete = 'import complete';
  queue_working = 'importing';
  is_importing = false;

  items = [
    {name:'Record one', status:''},
    {name:'Record two', status:''},
    {name:'Record three', status:''},
    {name:'Record four', status:''},
    {name:'Record five', status:''},
    {name:'Record six', status:''},
    {name:'Record seven', status:''}
  ];

  doIt(): void{
    this.is_importing = true;
    this.doWork(0);
  }

  doWork(index: number): void {
    if (index > 0) {

      if(index === 3) {
        this.items[index-1].status = 'Error: peeps be cray cray';
      }
      else if(index === 7) {
      this.items[index-1].status = 'Error: kids be cray cray';
      }
      else {
        this.items[index-1].status = this.queue_complete;
      }
    }

    if (index === this.items.length){
      this.is_importing = false;
       return;
    }

    this.items[index].status = this.queue_working;
    window.setTimeout(() => this.doWork(index+1), 2000);
  }
}
