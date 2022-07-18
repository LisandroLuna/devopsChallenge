FROM tomcat:8.0-alpine

ADD ./war/api.war /usr/local/tomcat/webapps/

EXPOSE 8080

CMD ["/opt/tomcat/bin/catalina.sh", "run"]

