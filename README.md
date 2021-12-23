Yo realice el proyecto como una API Rest desarrollada con spring boot, que se encarga de la gestión del juego y un frontend en angular que consume dicha API.
Utilice IntelliJ para el backend y Visual Studio Code para el frontend.
Como base de datos use SQL Server.
Es necesario tener instalado previamente:
- Maven
- Java
- Node.js
- Angular CLI
- SQL Server

INSTRUCCIONES PARA EL BACKEND:
1.	Abrir el proyecto en su IDE
2.	Ejecutar el comando “mvn install” para instalar las dependencias.
3.	Modificar en el archivo application.yml la instancia de SQL Server y las credenciales de usuario, si tiene angular corriendo en otro puerto diferente al 4200 modificar la propiedad crossOrigin.
4.	Ejecutar el proyecto: automáticamente se creará el esquema de la base de datos, haciendo uso hibernate y Jpa.
5.	Ir a SQL Server MS para agregar los datos iniciales que se encuentran en el archivo “src/main/resources/data.sql”.
INSTRUCCIONES PARA EL FRONTEND:
1.	Abrir el proyecto Visual Studio Code o su editor/IDE de preferencia.
2.	Ejecutar “npm install” para instalar las dependencias.
3.	Ejecutar “ng serve” para correr el proyecto.
