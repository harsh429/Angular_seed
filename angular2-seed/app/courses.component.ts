import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector:'cources',
    template:`<h2>Courses<h2>
    {{title}}
    <ul>
        <li *ngFor="#course of cources">
        {{course}}
</li>
</ul>
    `,
    providers:[CourseService]
})
export class CoursesComponent
 {
    title="the title of the course page";
    cources;

    constructor(courseService: CourseService){
    this.cources = courseService.getCourses();
    }
    


}