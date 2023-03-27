# Sign in user

## Description

Sign in user.

<b>URL:</b> `/auth/signin`

<b>Method:</b> `POST`

## Data constraints

```json
{
  "email": "[email type string]",
  "password": "[string 6-20 characters]"
}
```

## Data example

```json
{
  "email": "user@gmail.com",
  "password": "newpassword123"
}
```

## Success Response

Code: `201 CREATED`

Condition: If provided credentials match user data from db.

### Context example

API returns jsonwebtoken.

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ind3d3dAZ21haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImlhdCI6MTY3OTkyODQyMH0.AAY8RpVOJMycz6PBsy_VYwLTvWod5RjCScC3QVoLhMI"
}
```

## Error Response

Code: `400 BAD REQUEST`

Condition: If user with provided email doesn't exists.

```json
{
  "error": "Unauthorized",
  "message": "Could not find the user with provided email",
  "statusCode": 400
}
```

Code: `400 BAD REQUEST`

Condition: If provided password is incorrect.

```json
{
  "error": "Unauthorized",
  "message": "Incorrect password",
  "statusCode": 400
}
```
