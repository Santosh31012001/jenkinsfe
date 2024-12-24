# Use a lightweight Node.js runtime
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy the entire monorepo (assuming your Docker build context is the root of the monorepo)
COPY . .

# Install dependencies for the entire monorepo (this ensures all workspace dependencies are installed)
RUN npm install --legacy-peer-deps

# Navigate to your specific project folder (e.g., "restaurant-fe")
WORKDIR /app/packages/restaurant-fe

# Install project-specific dependencies
RUN npm install --legacy-peer-deps

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]