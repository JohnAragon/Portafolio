import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailComponent } from './components/detail/detail.component';

import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
	{path:'',component:AboutComponent},
	{path:'sobre-mi',component:AboutComponent},
	{path:'proyectos',component:ProjectsComponent},
	{path:'crear-proyecto',component:CreateComponent},
	{path:'editar-proyecto/:id',component:UpdateComponent},
	{path:'contacto',component:ContactComponent},
	{path:'detalle-proyecto/:id',component:DetailComponent},
	{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
