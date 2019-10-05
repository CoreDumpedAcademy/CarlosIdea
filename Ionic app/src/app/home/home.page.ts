import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  noticesOfTecnology = [
    {
      titular: 'Los trabajadores de TI remotos ganan más que los empleados de oficina',
      // tslint:disable-next-line: max-line-length
      descripcion: 'El número de puestos de trabajo remotos se duplica cada cuatro años, con un mayor atractivo salarial para los trabajadores.',
      // tslint:disable-next-line: max-line-length
      texto: 'El futuro del empleo parece estar en el trabajp a distancia, según una investigación realizada por la principal bolsa de trabajo independiente del Reino Unido, CV-Library. El estudio revela que el numero de puestos de trabajo a distancia ofrecidos se ha más que duplicado (51,7%) en los últimos cuatro años, a medida que las empresas aceptan la necesidad de cambiar sus practicas de trabajo. En el estudio, donde se analizaron más de 175.000 vacantes publicadas en el sitio web de CV-Library, también se revela que, si bien las empresas estan ampliando su base de talento anunciando puestos más remotos, su coste potencial podría ser mayor. El informe sostiene que las ganancias promedio de los profesionales de TI aumentan de aproximadamente US $56.600 a US$67.000 si se basan en el uso de sistemas remotos',
      // tslint:disable-next-line: max-line-length
      texto2: '"El trabajo a distancia requiere un tipo específico de persona que se motive a sí misma mientra trabaja de forma independiente", comentó Lee Biggins, fundador y CEO de CV-Library. Pero no es sólo la motivación. Trabajar desde casa también significa gastos extras que la oficina suele cubrir, como gastos adicionales de electricidad, calefacción o Internet, además de impuestos y otros servicios.',
      noticias: 'Trabajo',
      image: './assets/Foto3.jpg'

    },

    {
      titular: 'la mayoria de las empresas han sufrido una brecha de datos',
      // tslint:disable-next-line: max-line-length
      descripcion: 'En los últimos tres años, casi dps terceras partes (60 por ciento) de las empresas que han sufrido una vulneración de sus datos. Según un nuevo informe global de Bitdefender, a cuyo juicio las empresas que aún no han sido atacadas esperan vivir este problema en breve.',
      // tslint:disable-next-line: max-line-length
      texto: 'De hecho, más de una tercera parte de los profesionales de la seguridad de la información, o infosec, (36 por ciento) encuestados para el informe, cuyos empleadores aún no han sido atacados, crean probable que en estos precisos momentos estén enfrentando una amenaza a la seguridad cibernética sin siquiera enfrentarse.',
      // tslint:disable-next-line: max-line-length
      texto2: '"Y eso mantiene a la mitad de ellos despiertos por la noche", afirma Bitdefender, al asegurar que más de la mitad (58%) de los ejecutivos teme su empleador no esté preparad para enfrentarse a un cibertataque a escala global',
      noticias: 'Datos',
      image: './assets/Foto2.jpg'
    },
    {
      titular: 'Muchas empresas no creen que su antivirus sea adecuado',
      // tslint:disable-next-line: max-line-length
      descripcion: 'Un gran número de empresas no cree que su antivurus tenga la capacidad de detectar de forma adecuada y completa las amenazas y otras actividades anómalas en sus redes de TI. Un nuevo informe de ManageEngine, una empresa de softaware de gestion de TI para empresas, reveló que sólo el 12 por ciento de los encuestados que trabajan en grandes empresas tienen plena confianza en sus soluciones antivirus. En el caso de las pequeñas y medianas empresas, la situación es algo mejor, aunque sigue siendo preocupante, ya que sólo el 21 % tiene plena confianza.',
      // tslint:disable-next-line: max-line-length
      texto: 'Con el fin de hacer frente a estos problemas, las PYME recurren cada vez más a la tecnología en la nube. El informe indica que prácticamente todas las empresas (96%) utilizan algún tipo de tecnologías cloud, siendo los principales determinates la seguridad (55%), las herramientas CRM (39%), la productividad empresarial(38%) y los análisis y elaboración de informes (38%)',
      // tslint:disable-next-line: max-line-length
      texto2: 'Sin embargo, el uso de soluciones en la nube conlleva un nuevo abanico de problemas. Por ejemplo, la mayoría de los encuestados (70 %) no cumplen con el Reglamento General de Protección de Datos',
      noticias: 'Antivirus',
      image: './assets/Foto1.jpg'
    }

  ];

}

