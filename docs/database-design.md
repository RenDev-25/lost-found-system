# Database Design

## Tables
- **users** — id, name, email, password, role, timestamps
- **items** — id, title, description, category, status, location, date_reported, image, user_id, timestamps
- **claims** — id, item_id, user_id, message, status, timestamps

## Relationships
- User has many Items
- User has many Claims
- Item has many Claims
- Claim belongs to Item and User
