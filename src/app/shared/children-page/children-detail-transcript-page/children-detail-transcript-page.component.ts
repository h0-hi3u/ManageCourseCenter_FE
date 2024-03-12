import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicTranscript } from 'src/app/core/models/academicTranscript';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { AcademicTranscriptService } from 'src/app/core/services/academicTranscript.service';

@Component({
  selector: 'app-children-detail-transcript-page',
  templateUrl: './children-detail-transcript-page.component.html',
  styleUrls: ['./children-detail-transcript-page.component.css'],
})
export class ChildrenDetailTranscriptPageComponent implements OnInit {
  transcript : AcademicTranscript = {} as AcademicTranscript;
  constructor(
    private router: Router,
    private academicTranscriptService: AcademicTranscriptService
  ) {}
  ngOnInit(): void {
      const listUrl = this.router.url.split('/');
      const id = listUrl[listUrl.length - 1];
      this.academicTranscriptService.getById(id).subscribe((res: ResponseDto) => {
        this.transcript = res.data;
      })
  }
}
