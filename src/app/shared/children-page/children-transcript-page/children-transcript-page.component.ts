import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicTranscript } from 'src/app/core/models/academicTranscript/academicTranscript';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { AcademicTranscriptService } from 'src/app/core/services/academicTranscript.service';

@Component({
  selector: 'app-children-transcript-page',
  templateUrl: './children-transcript-page.component.html',
  styleUrls: ['./children-transcript-page.component.css']
})
export class ChildrenTranscriptPageComponent implements OnInit {
  listTranscript : AcademicTranscript[] = [];
  constructor(
    private academicTranscriptService:AcademicTranscriptService,
    private router: Router
    ) {}
  ngOnInit(): void {
    const childrenId = localStorage.getItem('childrenId') || '';
      this.academicTranscriptService.getTranscriptByChildrenId(childrenId).subscribe((res: ResponseDto) => {
        this.listTranscript = res.data;
      })
  }
  public goToDetailTranscript(id: number) {
    this.router.navigate([`/children/detail/${id}`]);
  }
}
