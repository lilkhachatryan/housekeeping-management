# Build the React application
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY build/ /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start nginx with the global option to stop on signal
CMD ["nginx", "-g", "daemon off;"]
