# API Documentation

Base URL: `http://localhost:8000/api`

## Auth
| Method | Endpoint   | Description        |
|--------|------------|--------------------|
| POST   | /login     | Log in, get token  |
| POST   | /logout    | Revoke token       |
| GET    | /me        | Get current user   |

## Items
| Method | Endpoint        | Auth | Description         |
|--------|-----------------|------|---------------------|
| GET    | /items          | No   | List all items      |
| GET    | /items/{id}     | No   | Get single item     |
| POST   | /items          | Yes  | Create item report  |
| PATCH  | /items/{id}     | Yes  | Update item         |
| DELETE | /items/{id}     | Yes  | Delete item         |

## Claims
| Method | Endpoint              | Auth | Description         |
|--------|-----------------------|------|---------------------|
| POST   | /claims               | Yes  | Submit a claim      |
| PATCH  | /admin/claims/{id}    | Yes  | Approve/reject      |
