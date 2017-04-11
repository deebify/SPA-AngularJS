import {Component} from '@angular/core'

@Component({
    selector: 'app-dev-local',
    //Use inline template tag and html inside it 
    template : `
        <div class="app">
            <h1> Inline Template</h1>
            {{appname}}
            <app-other> </app-other>
            
        </div>
    `,
    // or you can work with externel template any one will work
    //templateUrl: './app-dev.component.html',

    //Also for Style 
    styleUrls :['./app-dev.component.css']
    /*styles : [`
        // define all inline styles
        * {
            width: 500px;
            height: 500px;
            background-color: lightslategray;
        }
        h1{
            color:red;
        }
    `]*/
})
export class AppDevComponent {
 appname = "My Component"
}