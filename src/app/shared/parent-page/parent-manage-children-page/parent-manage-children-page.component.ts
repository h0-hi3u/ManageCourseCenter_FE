import { HelperDate } from 'src/app/core/helpers/helperDate';
import { Children } from 'src/app/core/models/children';
import { ParentService } from './../../../core/services/parent.service';
import { Component, OnInit } from '@angular/core';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-manage-children-page',
  templateUrl: './parent-manage-children-page.component.html',
  styleUrls: ['./parent-manage-children-page.component.css']
})
export class ParentManageChildrenPageComponent implements OnInit {
  parentId: string = '';
  listChildren: Children[] = [];
  constructor(private parentService: ParentService, private router: Router, public helperDate: HelperDate) {}
  ngOnInit(): void {
      this.parentId = localStorage.getItem('parentId') || '';
      this.parentService.getChildrenByParenId(this.parentId).subscribe((res : ResponseDto) => {
        this.listChildren = res.data;
      });
  }
  public goToCreateChild() {
    this.router.navigate(['/parent/create-children']);
  }
}
