# Use the Node.js 9.4.0 Alpine image as the base image
FROM node:9.4.0-alpine

# Copy the application files into the container
COPY app.js .
COPY package.json .

# Install dependencies and update Alpine packages
RUN npm install && \
    apk update && \
    apk upgrade

# Expose port 8080 to allow external connections
EXPOSE 8080

# Define the command to run the application
CMD node app.js
