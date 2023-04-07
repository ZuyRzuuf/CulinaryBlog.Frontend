# Choose the slim version of Node.js as the base image
FROM node:18.5.0-slim

# Create the directory on the node image
# where our Next.js app will live
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the development server with hot reloading
CMD ["yarn", "dev"]
