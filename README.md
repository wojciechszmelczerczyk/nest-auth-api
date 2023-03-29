# Auth app API

## Description

Simple REST API for user authentication.

## Table of contents

- [Techstack](#techstack)
- [Prerequisities](#prerequisities)
- [Architecture](#architecture)
- [Postman](#postman)
- [Endpoints](#endpoints)
- [To run](#to-run)

## Techstack

- `Nest.js`

## Prerequisities

- `Node.js`
- `MongoDB`

## Architecture

Application use `REST` style architecture.
`Client` side is created in `React.js` <br/>
`Server` side is created in `Nest.js`
Application use `MongoDB` atlas cloud.

<details>

<summary>Example</summary>

<img src="./.github/img/app-arch.png">
</details>

## Postman

You can play with API just import provided [Postman file](./auth-api.postman_collection.json) in Postman client.

## Endpoints

| Method |              Endpoint              |
| :----: | :--------------------------------: |
| `POST` | [`/auth/signup`](./docs/signup.md) |
| `POST` | [`/auth/signin`](./docs/signin.md) |

## To run

Clone repository.

```sh
git clone https://github.com/wojciechszmelczerczyk/nest-auth-api.git
```

Navigate to project directory.

```sh
cd ./nest-auth-api
```

Install dependencies.

```sh
npm i
```

Create `.env` file in project root directory and populate with your config.

```docker
DB_URI=

JWT_SECRET=
```

Run API in development mode.

```sh
npm run start:dev
```
