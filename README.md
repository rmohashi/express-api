# Express API

[![codecov](https://codecov.io/gh/rmohashi/express-api/branch/master/graph/badge.svg)](https://codecov.io/gh/rmohashi/express-api)
[![rmohashi](https://circleci.com/gh/rmohashi/express-api.svg?style=svg)](https://app.circleci.com/pipelines/github/rmohashi/express-api)

This repository is a playground to test express functionalities

## Prerequisites

* Docker and docker-compose
* Node 12.16.1

## Installation

1. Run to install dependencies:

    ```bash
    npm install
    ```

1. Run to download and start postgres image:

    ```bash
    docker-compose up
    ```

## Running the project

1. Ensure postgres container is up
1. Run to start server on http://localhost:4000:

    ```bash
    npm run start
    ```

## Running tests

1. Ensure postgres_test container is up
1. Run the command below:

    ```bash
    npm run test
    ```

1. It will generate the coverage report under `/coverage`
