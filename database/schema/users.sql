CREATE TABLE users (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  role       ENUM('student','staff','admin') DEFAULT 'student',
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL
);
