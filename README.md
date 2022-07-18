# Challenge DevOps

Para este challenge me base en la documentacion oficial de Jenkins para instalarlo en Kubernetes utilizando helm:
https://www.jenkins.io/doc/book/installing/kubernetes/

Los archivos utilixados se encuentran en la carpeta 'jenkins-server' de este repositorio.

## Backend

Contenedor con Tomcat 8, responde a una request basica en formato JSON.

Ubicado en la carpeta 'apps/backend'.

## Frontend

Contenedor con NodeJs, obtiene datos simple del contenedor Tomcat.
Ubicado en carpeta 'apps/frontend'.
