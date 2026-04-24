import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { IonicModule } from '@ionic/angular';
 import { FormsModule} from '@angular/forms';

 import { User } from '../../models/user';
 import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit {
  newUserName = ''
  userList: User[] = []
  isWeb: any
 
  constructor() {}
 
  ngOnInit() {
      
  }
}