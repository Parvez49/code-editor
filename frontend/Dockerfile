# Development Environment
FROM node:20

# Set the working directory
WORKDIR /code

# Install dependencies only once
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Next.js development port
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
