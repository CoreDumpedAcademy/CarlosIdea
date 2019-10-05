import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },  { path: 'crear-foro', loadChildren: './foro/crear-foro/crear-foro.module#CrearForoPageModule' },
  { path: 'lista-foros', loadChildren: './foro/lista-foros/lista-foros.module#ListaForosPageModule' },
  { path: 'lista-preguntas', loadChildren: './foro/lista-preguntas/lista-preguntas.module#ListaPreguntasPageModule' },
  { path: 'lista-respuestas', loadChildren: './foro/lista-respuestas/lista-respuestas.module#ListaRespuestasPageModule' },
  { path: 'post', loadChildren: './foro/post/post.module#PostPageModule' },
  { path: 'respuesta', loadChildren: './foro/respuesta/respuesta.module#RespuestaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
