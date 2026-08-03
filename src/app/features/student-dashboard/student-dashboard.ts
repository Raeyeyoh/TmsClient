import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CourseCardComponent } from '../../ui/course-card/course-card';
import { Course } from '../../models/course.model';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CourseService } from '../../services/course.service';
import { EnrollmentListComponent } from '../enrollment-list/enrollment-list';
@Component({
  selector: 'app-student-dashboard', // The HTML tag name: <app-student-dashboard />
  standalone: true,
  templateUrl: './student-dashboard.html', // Points to the HTML file
  imports: [CourseCardComponent, RouterLink, EnrollmentListComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './student-dashboard.scss', // Points to the styles file
})
export class StudentDashboardComponent {
  private api = inject(CourseService);
  studentName = signal('Liya Kebede');
  earnedCredits = signal(45);
  graduationStatus = computed(() =>
    this.earnedCredits() >= 120 ? 'Eligible for Graduation' : 'In Progress',
  );
  registerForClass() {
    this.earnedCredits.update((c) => c + 3);
  }

  selectedCourse = signal<Course | null>(null);
  // sampleCourse: Course = {
  //   id: 1,
  //   title: 'Advanced Java Services',
  //   code: 'CSE-101',
  //   maxCapacity: 30,
  //   enrollmentCount: 12,
  // };signal<Course[]>([]);
  // availableCourses = signal<Course[]>([
  //   {
  //     id: 1,
  //     title: 'Advanced Java Services',
  //     code: 'CSE-101',
  //     maxCapacity: 30,
  //     enrollmentCount: 10,
  //   },
  //   {
  //     id: 2,
  //     title: 'Angular UI Lab',
  //     code: 'CSE-210',
  //     maxCapacity: 25,
  //     enrollmentCount: 25,
  //   },
  //   {
  //     id: 3,
  //     title: 'Database Design',
  //     code: 'CSE-305',
  //     maxCapacity: 20,
  //     enrollmentCount: 18,
  //   },
  //   {
  //     id: 4,
  //     title: 'API Security Workshop',
  //     code: 'CSE-420',
  //     maxCapacity: 40,
  //     enrollmentCount: 15,
  //   },
  // ]);
  coursesResource = rxResource({
    stream: () => this.api.getAll(),
  });
  handleEnroll(course: Course) {
    this.selectedCourse.set(course);
    console.log('Enrollment requested for:', course.title);
  }
}
