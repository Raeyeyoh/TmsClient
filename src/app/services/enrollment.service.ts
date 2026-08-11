import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';
import { environment } from '../../environments/environment';
@Service()
export class EnrollmentService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5294/api/courses/1/enrollments';
  private baseUrl1 = `${environment.apiUrl}/enrollments`;

  getAll(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.baseUrl);
  }
  approve(id: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl1}/${id}`, {});
  }
}
