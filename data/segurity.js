const data=[

{
title:"Controller",
img_src:"",
code:
`@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders = "Authorization")
@PreAuthorize("hasRole('ADMIN')")

@GetMapping("")
@PreAuthorize("hasRole('ADMIN')")
public void ....
`
},


{
title:"application.properties",
img_src:"",
code:
`server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/db_employees
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

jwt.secret=0C/ZZj9OCW7Q74lUM200BayaFq6u12EKyps4NLFQNufowubX5nE1DQT8XRdwv0zUBp7Tns1yhYlwzUCm3maQkg==`
},


{
title:"application.properties  para el frontend",
img_src:"",
code:
`spring.application.name=api_simulacro
spring.datasource.url=jdbc:postgresql://localhost:5432/db_ExamenFinal
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

#No envia el trace al usuario cuando hay error.
server.error.include-stacktrace=never
#spring.jackson.date-format=yyyy-dd-MM

#https://bcrypt--generator-com.webpkgcache.com/doc/-/s/bcrypt-generator.com/
#https://bcrypt-generator.com/
ip.frontend=localhost:4200
jwt.secret=0C/ZZj9OCW7Q74lUM200BayaFq6u12EKyps4NLFQNufowubX5nE1DQT8XRdwv0zUBp7Tns1yhYlwzUCm3maQkg==`
},


{
title:"pom.xml",
img_src:"",
code:
`<!-- Mapper -->
<dependency>
	<groupId>org.modelmapper</groupId>
	<artifactId>modelmapper</artifactId>
        <version>3.0.0</version>
</dependency>
<!--security-->
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-test</artifactId>
        <scope>test</scope>
</dependency>
<!-- JWT -->
<dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-api</artifactId>
        <version>0.11.5</version>
</dependency>
<dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-impl</artifactId>
        <version>0.11.5</version>
</dependency>
<dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt-jackson</artifactId>
        <version>0.11.5</version>
</dependency>`
},


{
title:"resources/import.sql",
img_src:"",
code:
`INSERT INTO roles (name) VALUES ('ROLE_USER');
INSERT INTO roles (name) VALUES ('ROLE_ADMIN');
INSERT INTO users(username, password) VALUES ('user1','$2a$12$1k34YdrmxBkVborQvZLh2OUvX1S80GVVQjZJ5H55y1eez7XV.nV06');
INSERT INTO users(username, password) VALUES ('admin','$2a$12$1k34YdrmxBkVborQvZLh2OUvX1S80GVVQjZJ5H55y1eez7XV.nV06');
INSERT INTO user_roles (user_id, role_id) VALUES (1, 1); -- user1 with ROLE_USER
INSERT INTO user_roles (user_id, role_id) VALUES (2, 2); -- admin with ROLE_ADMIN`
},

]
