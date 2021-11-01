const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const userRoute = require('./routes/users');

//swagger Imports
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');

//swagger setup
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'Node Swagger API',
            version: '1.0.0',
            description: 'Demonstrating how to describe a RESTful API with Swagger',
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
            {
                url: "http://dev......."
            },
            {
                url: "http://prod....."
            },
            {
                url: "http://staging....."
            },
            {
                url: "http://test....."
            }
        ],
        host: 'localhost:3000',
        basePath: '/',
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerDocument(options);


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());
app.use(cors());

app.use('/users',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
