import { Routes } from '@angular/router';
import { BabeeProfileComponent } from './babee/babee-profile/babee-profile.component';
import { BabeeListComponent } from './babee/babee-list/babee-list.component';

export const routes: Routes = [
    {
    path: 'bebe',
    children: [
        {
            path: ':id',
            component: BabeeProfileComponent,
            title: 'Babee'
        },
        {
            path: '',
            component: BabeeListComponent
        }
    ]}, 
    // {
    //     path: 'login',
    // },
    {
        path: '',
        redirectTo: 'bebe',
        pathMatch: 'full'
    },
    // {
    //     path: '**'
    // }
];
