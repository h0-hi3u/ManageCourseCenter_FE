import { Component } from '@angular/core';
import { faBell, faUser, faRightFromBracket, faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-children-page',
  templateUrl: './children-page.component.html',
  styleUrls: ['./children-page.component.css']
})
export class ChildrenPageComponent {
  faBell = faBell;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  faFile= faFile;
  
}
