const data=[

{
title:"Nuevo proyecto",
img_src:"/img/nuevo_proyecto.jpg"
},

{
title:"Dependencias",
img_src:"/img/dependencia_1.jpg"
},

{
title:"application.properties",
img_src:"",
code:
`server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/db_prueba_x
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

#No envia el trace al usuario cuando hay error.
server.error.include-stacktrace=never
#spring.jackson.date-format=yyyy-dd-`
},

{
title:"pom.xml",
img_src:"",
code:
`<!-- Swagger: http://localhost:8080/swagger-ui/index.html -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>`
},


]


