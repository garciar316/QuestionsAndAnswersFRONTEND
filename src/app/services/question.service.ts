import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnswerOption } from '../models/anser_option.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private API_SERVER: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getQuestionByCategory(categoryId: number): Observable<Question> {
    return this.http.get<Question>(
      `${this.API_SERVER}/preguntas/${categoryId}`
    );
  }

  public getAnswerOptionById(opId: number): Observable<AnswerOption> {
    return this.http.get<AnswerOption>(`${this.API_SERVER}/respuestas/${opId}`);
  }

  public getAnswerOptions(questionId: number): Observable<AnswerOption[]> {
    return this.http.get<AnswerOption[]>(
      `${this.API_SERVER}/respuestas/pregunta/${questionId}`
    );
  }
}
