FROM openjdk:21-jdk-slim
WORKDIR /wassit
COPY ["target/wassit-0.0.1-SNAPSHOT.jar", "wassit.jar"]
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "wassit.jar"]
