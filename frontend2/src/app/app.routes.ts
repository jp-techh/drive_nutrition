import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RecommendationsComponent} from './recommendations/recommendations.component';
import {EducationComponent} from './education/education.component';
import { IntakeComponent } from './intake/intake.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'intake', component: IntakeComponent}
];
