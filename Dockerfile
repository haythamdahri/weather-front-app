FROM node:latest
WORKDIR /app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
