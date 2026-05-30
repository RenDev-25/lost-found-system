CREATE TABLE claims (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  item_id    BIGINT UNSIGNED NOT NULL,
  user_id    BIGINT UNSIGNED NOT NULL,
  message    TEXT NOT NULL,
  status     ENUM('pending','approved','rejected') DEFAULT 'pending',
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL,
  FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
