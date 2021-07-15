import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any) => this.faqs = result)
  }

  ngOnInit(): void {
  }

}
