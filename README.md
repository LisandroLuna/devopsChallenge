# Challenge DevOps

Para este challenge me base en la documentacion oficial de Jenkins para instalarlo en Kubernetes utilizando helm:
https://www.jenkins.io/doc/book/installing/kubernetes/

Los archivos utilizados se encuentran en la carpeta 'jenkins-server' de este repositorio.

Para hacer los build utilice una instancia de GCE y ejecuto los comandos por SSH, no logre configurar correctamente el agente de jenkins para utilizar kubectl y priorice la funcionalidad. 

## Backend

Contenedor con Tomcat 8, responde a una request basica en formato JSON. No fue desarrollado por mi ya que no poseo experiencia con java pero sirve para proveer la funcionalidad.

Servicio del tipo ClusterIP para acceso interno. Utiliza el namespace 'app-backend'.

Responde en este endpoint: http://backend.app-backend.svc.cluster.local:8080/Spring4-1/data/person?id=15

Ubicado en la carpeta 'apps/backend'. En esa misma carpeta esta el Dockerfile con el que construi la imagen lisandrodev/api.

El Dockerfile utilizado para la el contenedor se encuentra en la carpeta antes mencionada.

Fuente: https://www.concretepage.com/spring-4/spring-4-rest-web-service-json-example-tomcat

## Frontend

Contenedor con NodeJs, obtiene datos del contenedor Tomcat y los muestra en un template basico.

Servicio del tipo LoadBalancer para acceso externo. Utiliza el namespace 'app-frontend'.

Responde en el puerto 80 con la IP que asigne el provider, en la version disponible al momento de actualizar este archivo: http://34.172.219.28:8080/

Ubicado en carpeta 'apps/frontend'. En esa misma carpeta esta el Dockerfile con el que construi la imagen lisandrodev/web.

El Dockerfile utilizado para la el contenedor se encuentra en la carpeta antes mencionada.

