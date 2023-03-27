# Sign up user

## Description

Sign up user.

<b>URL:</b> `/auth/signup`

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

Condition: If provided credentials match data constraints.

### Context example

API returns credentials of signed up user.

```json
{
  "__v": 0,
  "_id": "6421998c628c1aab01aaebc4",
  "email": "user@gmail.com",
  "password": "$2b$10$f.ICtw97L4AFDgDxzyoi1OkJfPvo7siysn9zsm/7Iaa4PF0IvA6Ae"
}
```

## Error Response

Code: `400 BAD REQUEST`

Condition: If provided email is not an email.

```json
{
  "error": "Bad Request",
  "message": ["email must be an email"],
  "statusCode": 400
}
```

Code: `400 BAD REQUEST`

Condition: If user with provided email already exists.

```json
{
  "error": "Unauthorized",
  "message": "User with provided email already exists",
  "statusCode": 400
}
```

Code: `400 BAD REQUEST`

Condition: If provided password is incorrect.

```json
{
  "error": "Bad Request",
  "message": ["Password should be 6-20 characters long"],
  "statusCode": 400
}
```
