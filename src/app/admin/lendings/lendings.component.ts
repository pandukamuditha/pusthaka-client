import { Component, OnInit } from '@angular/core';
import { Lending } from '../../models/lending';
import { LendingService } from '../../services/lending/lending.service';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {
  displayedLendingTableColumns = ['title', 'burrower', 'dueDate', 'fine'];

  lendings: Lending[];
  types = [
    {
      view: 'All',
      value: 'all'
    },
    {
      view: 'Overdue',
      value: 'overdue'
    },
    {
      view: 'In Time',
      value: 'intime'
    }
  ];

  constructor(
    private lendingService: LendingService,
  ) { }

  ngOnInit() {
    this.lendingService.getAll('all').subscribe(
      lendings => { this.lendings = lendings as Lending[]; }
    );
  }

  onTypeChange($event) {
    this.lendingService.getAll($event).subscribe(
      lendings => { this.lendings = lendings as Lending[]; }
    );
  }

  calculateDue(issuedDate: string) {
    const date = new Date(issuedDate);
    return (date.getTime() + 604800000);
  }

  calculateFine(issuedDate: string) {
    const date = new Date(issuedDate);
    if ((Date.now() - (date.getTime() + 604800000) > 0)) {
      return Math.round(((Date.now() - (date.getTime() + 604800000)) / 86400000) * 20);
    } else {
      return 0;
    }
  }

}
