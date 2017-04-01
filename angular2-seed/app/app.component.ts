import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
@Component({
    selector: 'my-app',
    template: '<h1> hey there algular 2 app </h1><cources></cources>',
    directives:[CoursesComponent]
})
export class AppComponent { }