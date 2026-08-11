// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'studentdashboard',
    loadComponent: () =>
      import('./features/student-dashboard/student-dashboard').then(
        (m) => m.StudentDashboardComponent,
      ),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./features/course-detail/course-detail').then((m) => m.CourseDetailComponent),
  },
  {
    path: 'enroll',
    loadComponent: () =>
      import('./features/enrollment-form/enrollment-form').then((m) => m.EnrollmentFormComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/instructor-dashboard/instructor-dashboard').then(
        (m) => m.InstructorDashboardComponent,
      ),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'enrollments',
    loadComponent: () =>
      import('./features/enrollment-list/enrollment-list').then((m) => m.EnrollmentListComponent),
  },
  {
    path: 'grade-submission',
    loadComponent: () =>
      import('./features/grade-submission/grade-submission').then(
        (m) => m.GradeSubmissionComponent,
      ),
  },
];
