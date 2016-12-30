import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: `navbar.component.html`,
})
export class NavbarComponent { 
    constructor(private auth: Auth){
        
    }
 }