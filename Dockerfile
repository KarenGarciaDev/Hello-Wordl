# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose dynamic port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
