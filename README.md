# AuthArithmetix : Secure Arithmetic Operation API with Authentication

The Secure Arithmetic Operation API is a Node.js application that provides a secure way to perform basic arithmetic operations. This service uses JSON Web Tokens (JWT) for authentication, ensuring that only authorized clients can access the API endpoints to perform addition, subtraction, multiplication, and division operations.

## Features

- JWT-based authentication to secure API endpoints
- Ability to generate a JWT token upon successful authentication
- Protected endpoints for addition, subtraction, multiplication, and division
- Each endpoint accepts two input parameters for the arithmetic operation

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

* Node.js
* npm

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

Clone the repository:
```bash
   git clone https://github.com/akash-tk/AuthArithmetix.git
   cd AuthArithmetix
```

Install the necessary node modules:

```bash
 npm install 
```

## Configuration

To get your application running, you need to set up your environment variables:

1. Create a `.env` file in the root directory of your project.
2. Add the following to the `.env` file, replacing the placeholders with your actual data:

```env
JWT_SECRET=your-jwt-secret
```
Start the server:

```bash
node index.js
```

The server will start on port 3000 or the next available port.

## Postman
You can find the Postman collection in /Postman directory to easily test the API endpoints.

## Screenshots
You can find the Screenshots of the implementation in /Screenshots directory.

## Usage

Authenticate to receive a JWT token, then perform arithmetic operations by sending requests to:

- `/add` for addition
- `/subtract` for subtraction
- `/multiply` for multiplication
- `/divide` for division

Include JWT token in the `Authorization` header.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JWT implementation for Node.js
