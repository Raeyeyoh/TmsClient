// import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { EnrollmentStore } from '../../store/enrollment.store';
// @Component({
//   selector: 'tms-enrollment-list',
//   standalone: true,
//   changeDetection: ChangeDetectionStrategy.Eager,
//   templateUrl: './enrollment-list.html',
// })
// export class EnrollmentListComponent implements OnInit {
//   store = inject(EnrollmentStore);
//   ngOnInit() {
//     this.store.loadEnrollments();
//   }
//   onApprove(id: string) {
//     this.store.approveEnrollment(id);
//   }
// }
// import { Component, viewChild, effect, inject } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { EnrollmentStore } from '../../store/enrollment.store';
import { Enrollment } from '../../models/enrollment.model';
import { Component, effect, inject, viewChild } from '@angular/core';
@Component({
  selector: 'tms-enrollment-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './enrollment-list.html',
  styleUrl: './enrollment-list.scss',
})
export class EnrollmentListComponent {
  store = inject(EnrollmentStore);
  displayedColumns = ['studentName', 'courseName', 'status', 'actions'];
  dataSource = new MatTableDataSource<Enrollment>();
  readonly paginator = viewChild.required(MatPaginator);
  readonly sort = viewChild.required(MatSort);
  constructor() {
    effect(() => {
      this.dataSource.data = this.store.entities();
    });
    effect(() => {
      this.dataSource.paginator = this.paginator();
      this.dataSource.sort = this.sort();
    });
    this.store.loadEnrollments();
  }
}
