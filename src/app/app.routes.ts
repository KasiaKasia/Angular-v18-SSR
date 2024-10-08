import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
},
{
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
},
{
    path: '404',
    component: NotFoundComponent
},
{
    path: '**',
    redirectTo: '404'
}];
