# <center >EBUY</center>

## What does it do?

EBUY is a full-stack e-commerce website. It allows the customer to perform all necessary operations, such as browsing home page to see all available goods, go to a specific product page to see all its informations and also add it to his cart for potential purchase.

## Technologies used

[![My Skills](https://skillicons.dev/icons?i=html,css,bootstrap,js,ts,nodejs,express,postgres)](https://skillicons.dev)

## Getting Started

### Prerequisites

- [Node js](https://nodejs.org/en)
- [Node package manager (npm)](https://www.npmjs.com/)
- [Postgress](https://www.postgresql.org/)

### Demo

- ![homePage image](/assets/images/homePage.jpg "Home Page")
- ![productPage image](/assets/images/productPage.jpg "Product Page")

### Installation

#### Below are the steps to help you install and run the project:

1. Clone the repository

```
git clone https://github.com/MoustafaAshraf8/ebuy.git
```

### Usage
#### Below are the steps to run the full-stack website
1. Create database in postgress (sql)

```
create database ebuy_database;
```
2. Create .env file with these data init:

```r
//version
ACTIVE_VERSION=v1
//database
NODE_ENV="production"
POSTGRESS_HOST=<database host>
POSTGRESS_USER=<your postgres username>
POSTGRESS_PORT=<your postgres port || 5432>
POSTGRESS_PASSWORD=<your postgres password>
POSTGRESS_DATABASE="ebuy_database"
//operating
PORT=<your desired operating port || 8080>
//hashing
SALT_ROUND=10
//jwt secret
ACCESS_TOKEN_SECRET="02d87076e5db06edba9cd95c3f835d5c341f32440a295bb8af6f7821ebef24c90b3773e42e630544ad16b9f7a751c2c580282e956882ea6c26a475c64b628959"
REFRESH_TOKEN_SECRET="a00360a1b18f9517af739ab30e7fecfb341db0ccea707d787170baef1191c41a69032c3d06acaf3fc7ec5e99615bb1e4e4a5de3459f42c2b3889118bea8ae4b5"
```
3. Run the server
```
cd Server && npm start
```
4. Run the frontend
```
cd ebuy && npm start
```
5. Brouse the website on localhost://3000