
import '../CSS/Color.css';

//Definición de colores por inteligencia y programa de interés 

export const getIntVerbal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Comunicación social' || programa1 === 'Administración'||
    programa1 === 'Administracion Ambiental' || programa1 === 'Antropologia - Arqueologia' || programa1 === 'Bibliotecología' ||
    programa1 === 'Ciencia Política' || programa1 === 'Cine' || programa1 === 'Contaduria Pública - Tec. En Gestión Contable y Costos' ||
    programa1 === 'Derecho - Criminalística' || programa1 === 'Economía' || programa1 === 'Educación'|| 
    programa1 === 'Filosofía - Teología' || programa1 === 'Física' || programa1 === 'Formación Militar o Policial'|| 
    programa1 === 'Gastronomía' || programa1 === 'Negocios Internacionales, Comercio Exterior' || programa1 === 'Psicología'|| 
    programa1 === 'Relaciones Internacionales' || programa1 === 'Publicidad - Comunicación Publicitaria' || programa1 === 'Sociología'|| 
    programa1 === 'Trabajo Social' || programa1 === "Ciencia Política"
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Artes Escenicas - Teatro - Danzas'|| programa1 === 'Lenguas Modernas, Literatura, Traducción' ||
         programa1 === 'Medicina' || programa1 === 'Mercadeo y Negocios Internacionales' 
         || programa1 === 'Artes Escenicas - Teatro - Danzas'
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntMatematica = (programa1,inteligencia1) =>  {
    if (programa1 === 'Ingeniería informática' || programa1 === 'Economía' || programa1 === 'Ingeniería industrial'
      || programa1 === 'Ingeniería mecatrónica' || programa1 === 'Ingeniería multimedia'
      || programa1 === 'Mercadeo y Negocios Internacionales' || programa1 === 'Administración' 
      || programa1 === 'Medicina'|| programa1 === 'Administracion Ambiental' || programa1 === 'Geología'
      || programa1 === 'Agronomía' || programa1 === 'Aviación' || programa1 === 'Bacteriología'
      || programa1 === 'Biología - Microbiología - Ecología'
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Arquitectura' || programa1 === 'Psicología' || programa1 === 'Bibliotecología' 
          || programa1 === 'Derecho - Criminalística' || programa1 === "Ciencia Política"
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntVisualEspacial = (programa1,inteligencia1) =>  {
    if (programa1 === 'Cine' || programa1 === 'Arquitectura' || programa1 === 'Ingeniería informática'
         || programa1 === 'Ingeniería multimedia' || programa1 === 'Publicidad - Comunicación Publicitaria'
         || programa1 === 'Administracion Ambiental' || programa1 === 'Geología' || programa1 === 'Artes Escenicas - Teatro - Danzas'
         || programa1 === 'Aviación' || programa1 === 'Bibliotecología' || programa1 === "Diseño"
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Comunicación social' || programa1 === 'Música' || programa1 === 'Ingeniería mecatrónica'
         || programa1 === 'Medicina' || programa1 === 'Agronomía' || programa1 === 'Biología - Microbiología - Ecología'
         || programa1 === 'Deportes - Educación Física y Recreación'
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntNaturalista = (programa1,inteligencia1) =>  {
    if (programa1 === 'Administracion Ambiental' || programa1 === 'Agronomía' || programa1 === 'Bacteriología'
        || programa1 === 'Biología - Microbiología - Ecología'

    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Geología'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntkinesico_corporal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Arquitectura' || programa1 === 'Administracion Ambiental' || programa1 === 'Artes Escenicas - Teatro - Danzas'
        || programa1 === 'Deportes - Educación Física y Recreación'
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine' || programa1 === 'Comunicación social'|| programa1 === 'Ingeniería mecatrónica'
         || programa1 === 'Medicina' || programa1 === 'Publicidad - Comunicación Publicitaria'
         || programa1 === 'Agronomía' || programa1 === 'Biología - Microbiología - Ecología'
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntRitmicoMusical = (programa1,inteligencia1) =>  {
    if (programa1 === 'Música' || programa1 === 'Artes Escenicas - Teatro - Danzas'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Comunicación social' || programa1 === 'Cine' || programa1 === 'Publicidad - Comunicación Publicitaria'){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntIntraPersonal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Psicología'){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine' || programa1 === 'Música' || programa1 === 'Ingeniería industrial'
     || programa1 === 'Artes Escenicas - Teatro - Danzas' || programa1 === 'Aviación'
     ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }

   export const getIntInterPersonal = (programa1,inteligencia1) =>  {
    if (programa1 === 'Comunicación social' || programa1 === 'Música' || programa1 === 'Psicología' 
         || programa1 === 'Ingeniería industrial' || programa1 === 'Mercadeo y Negocios Internacionales'
         || programa1 === 'Administración' || programa1 === 'Medicina' || programa1 === 'Publicidad - Comunicación Publicitaria'
         || programa1 === 'Artes Escenicas - Teatro - Danzas' || programa1 === 'Bibliotecología' 
         || programa1 === 'Deportes - Educación Física y Recreación' || programa1 === 'Derecho - Criminalística'
         || programa1 === "Ciencia Política" || programa1 === "Diseño"
    ){
     return inteligencia1 >= 0 ? 'green' : ''
     }

     if (programa1 === 'Cine' || programa1 === 'Arquitectura' ){
        return inteligencia1 >= 0 ? 'yellow' : ''
        }
   }