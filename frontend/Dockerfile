# use nodejs 23-alpine as base image
FROM node:23-alpine

# set working directory
WORKDIR /clean-d-coders-frontend

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# Build the app
RUN npm run build

# expose port 4173
EXPOSE 4173

# start the app
CMD ["npm", "run", "preview"]
