FROM node
WORKDIR /
COPY . .
RUN npm install 
RUN npm run build.
EXPOSE 7000
CMD ["npm", "start"]
