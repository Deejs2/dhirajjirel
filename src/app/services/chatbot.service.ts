import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://chatbot-worker.jireldhiraj123.workers.dev/chat'; 

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<string> {
    return this.http.post<{ response: string }>(this.apiUrl, { message })
      .pipe(map(response => response.response));
  }
}