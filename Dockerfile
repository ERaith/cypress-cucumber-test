FROM cypress/included:8.0.0
RUN npm i typescript
RUN npm install cypress-cucumber-preprocessor
