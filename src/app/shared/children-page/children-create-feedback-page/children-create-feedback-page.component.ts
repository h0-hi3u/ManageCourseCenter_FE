import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FeedbackCreateDto } from 'src/app/core/models/feedbackDto/feedbackCreateDto';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-children-create-feedback-page',
  templateUrl: './children-create-feedback-page.component.html',
  styleUrls: ['./children-create-feedback-page.component.css']
})
export class ChildrenCreateFeedbackPageComponent implements OnInit{
  childrenClassId: string = '';
  messageCreateFail: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private feedbackService: FeedbackService) {

  }
  ngOnInit(): void {
    const listUrl = this.router.url.split('/');
    this.childrenClassId = listUrl[listUrl.length - 1];
  }
  createFeedbackForm = this.formBuilder.group({
    ratingCourse: new FormControl(null, [Validators.required]),
    ratingTeacher: new FormControl(null, [Validators.required]),
    ratingEquipment: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  get getForm() {
    return this.createFeedbackForm.controls;
  }
  public submitFeedback() {
    console.log('submit');
    const feedbackCreateDto: FeedbackCreateDto = {} as FeedbackCreateDto
    feedbackCreateDto.childrenClassId = parseInt(this.childrenClassId);
    feedbackCreateDto.courseRating = parseInt(this.getForm.ratingCourse.value || '0');
    feedbackCreateDto.teacherRating = parseInt(this.getForm.ratingTeacher.value || '0');
    feedbackCreateDto.equipmentRating = parseInt(this.getForm.ratingEquipment.value || '0');
    feedbackCreateDto.description = this.getForm.description.value || '';
    this.feedbackService.createFeedback(feedbackCreateDto).subscribe((res: ResponseDto) => {
      if(res.isSuccess) {
        this.router.navigate(['/children']);
      } else {
        this.messageCreateFail = "Some wrong. Please check information and try again";
      }
    })
    
  }
}
