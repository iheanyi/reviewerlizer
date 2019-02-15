FROM node:10

LABEL version="1.0.0"
LABEL repository="http://github.com/appleton/reviewerlizer"
LABEL maintainer="Andrew Appleton"

LABEL com.github.actions.name="Reviewerlizer"
LABEL com.github.actions.description="Generates peer reviews"
LABEL com.github.actions.icon="mic"
LABEL com.github.actions.color="blue"

COPY "./" "/"
RUN ["npm", "install"]
CMD ["node", "index.js"]
