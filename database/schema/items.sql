CREATE TABLE items (
  id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title         VARCHAR(255) NOT NULL,
  description   TEXT NOT NULL,
  category      VARCHAR(100) NOT NULL,
  status        ENUM('lost','found','claimed') DEFAULT 'lost',
  location      VARCHAR(255) NOT NULL,
  date_reported DATE NOT NULL,
  image         VARCHAR(255) NULL,
  user_id       BIGINT UNSIGNED NOT NULL,
  created_at    TIMESTAMP NULL,
  updated_at    TIMESTAMP NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
