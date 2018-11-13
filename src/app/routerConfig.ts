import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

export const appRoutes : Routes = [
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit',
        component: EditComponent
    },
    {
        path: 'delete',
        component: DeleteComponent
    },
    {
        path: 'index',
        component: IndexComponent
    }
];