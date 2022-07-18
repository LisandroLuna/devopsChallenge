# Challenge DevOps

Para este challenge me base en la documentacion oficial de Jenkins para instalarlo en Kubernetes utilizando helm:
https://www.jenkins.io/doc/book/installing/kubernetes/

Los archivos utilizados se encuentran en la carpeta 'jenkins-server' de este repositorio.

Para hacer los build utilice una instancia de GCE y ejecuto los comandos por SSH, no logre configurar correctamente el agente de jenkins para utilizar kubectl y priorice la funcionalidad. En cuanto sea posible sera actualizado y se modificaran los pipelines.

## Backend

Contenedor con Tomcat 8, responde a una request basica en formato JSON.

Ubicado en la carpeta 'apps/backend'.

Servicio del tipo ClusterIP para acceso interno.

Responde en este endpoint: http://backend.app-backend.svc.cluster.local:8080/Spring4-1/data/person?id=15

## Frontend

Contenedor con NodeJs, obtiene datos simple del contenedor Tomcat.

Ubicado en carpeta 'apps/frontend'.

Servicio del tipo LoadBalancer para acceso externo.

Responde en el puerto 80 con la IP que asigne el provider, en la version disponible al momento de actualizar este archivo: http://34.172.219.28:8080/

