# Build Stage
FROM gradle:jdk23 as builder

# Set the working directory in the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Build the Spring Boot application
RUN gradle clean bootJar --no-daemon

# Runtime Stage
FROM openjdk:23-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=builder /app/build/libs/kidzworld-0.0.1-SNAPSHOT.jar app.jar

# Expose the port on which the application will run
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
