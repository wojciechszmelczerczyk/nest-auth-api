# Auth app API

## Description

Simple REST API for user authentication.

## Table of contents

- [Techstack](#techstack)
- [Prerequisities](#prerequisities)
- [Endpoints](#endpoints)
- [To run](#to-run)

## Techstack

- `Nest.js`

## Prerequisities

- `Node.js`

## Endpoints

| Method |              Endpoint              |
| :----: | :--------------------------------: |
|  POST  | [`/auth/signup`](./docs/signup.md) |

## To run

Install dependencies.

```sh
npm i
```

Create `.env` file in project root directory and populate with your config.

```docker
DB_URI=
```

Run API in development mode.

```sh
npm run start:dev
```
