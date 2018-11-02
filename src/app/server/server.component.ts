import { Component, OnInit } from '@angular/core';
import {Student} from '../../shared/student.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverId2 = 35;
  serverStatus = 'offline';
  counter = 0;
  isLogin = false;
  userName: string;
  students: Student[] = [
    new Student('Bob', 'Math'),
    new Student('Bob', 'Math'),
    new Student('Bob', 'Math')
  ]
  constructor() { }
  getServerStatus() {
    return this.serverStatus;
  }

  counterPlus() {
    this.counter ++;
  }
  resetCounter() {
    this.counter = 0;
  }
  login(){
    this.isLogin = true;
  }
  signOut(){
    this.isLogin = false;
  }

  ngOnInit() {
  }

}
