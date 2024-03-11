import { HelperDate } from './../../../core/helpers/helperDate';
import { Component, OnInit } from '@angular/core';
import { Children } from 'src/app/core/models/children';
import { ResponseDto } from 'src/app/core/models/reponseDto';
import { ChildrenService } from 'src/app/core/services/children.service';

@Component({
  selector: 'app-manage-children-page',
  templateUrl: './manage-children-page.component.html',
  styleUrls: ['./manage-children-page.component.css']
})
export class ManageChildrenPageComponent implements OnInit{
  listChildren: Children[] = [];
  constructor(
    private childrenService: ChildrenService,
    public helperDate: HelperDate
    ){}
  ngOnInit(): void {
      this.childrenService.getAll().subscribe((res: ResponseDto) => {
        this.listChildren = res.data
      })
  }
}
