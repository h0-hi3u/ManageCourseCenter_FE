import { HelperDate } from './../../../core/helpers/helperDate';
import { ParentService } from './../../../core/services/parent.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parent } from 'src/app/core/models/parentDto/parent';
import { ResponseDto } from 'src/app/core/models/reponseDto';

@Component({
  selector: 'app-manage-parent-page',
  templateUrl: './manage-parent-page.component.html',
  styleUrls: ['./manage-parent-page.component.css']
})
export class ManageParentPageComponent implements OnInit {
  listParent: Parent[] = [];
  constructor(
     private parentService: ParentService,
     public helperDate : HelperDate,
     private router: Router
     ) {}
  ngOnInit(): void {
      this.parentService.getAll().subscribe((res: ResponseDto) => {
        this.listParent = res.data;
      })
  }
  public goToParentDetail(parentId: number) {
    // this.router.navigate([`/manager/parent`])
  }
}
