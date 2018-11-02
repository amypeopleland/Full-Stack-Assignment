import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { InputGroup } from 'bootstrap-vue/es/components';
import {ServerComponent} from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//那些包和组建我要加载
