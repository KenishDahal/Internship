-- Active: 1677132060927@@127.0.0.1@5432@postgres@public

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL
);

-- Table for storing blog posts
CREATE TYPE current_status AS ENUM ('draft', 'published');
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  status current_status VARCHAR(20) NOT NULL DEFAULT 'draft',
  permission_id INTEGER REFERENCES permissions(id) NOT NULL
);
INSERT INTO posts (title, content, views,featured,user_id,status,permission_id) VALUES ('engineers', 'Good engineers', 22, true, 2, 'draft',1 );
INSERT INTO posts (title, content, views,featured,user_id,status,permission_id) VALUES ('laptop', 'Good laptop', 122, false, 1, 'draft',2 );
-- Table for storing permissions for each role
CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  role VARCHAR(20) NOT NULL,
  can_create_draft BOOLEAN NOT NULL DEFAULT false,
  can_publish_post BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO permissions (role, can_create_draft, can_publish_post) VALUES ('admin', true, true);
INSERT INTO permissions (role, can_create_draft, can_publish_post) VALUES ('moderator', true, true);
INSERT INTO permissions (role, can_create_draft, can_publish_post) VALUES ('author', true, false);



-- Table for storing categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT
);

-- Table for storing tags
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT
);

-- Table for storing post-category associations
CREATE TABLE post_categories (
  post_id INTEGER REFERENCES posts(id) NOT NULL,
  category_id INTEGER REFERENCES categories(id) NOT NULL,
  PRIMARY KEY (post_id, category_id)
);

-- Table for storing post-tag associations
CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) NOT NULL,
  tag_id INTEGER REFERENCES tags(id) NOT NULL,
  PRIMARY KEY (post_id, tag_id)
);

-- Table for storing comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  post_id INTEGER REFERENCES posts(id) NOT NULL,
  parent_id INTEGER REFERENCES comments(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Table for storing post metadata attributes
CREATE TABLE post_metadata (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) NOT NULL,
  key VARCHAR(50) NOT NULL,
  value TEXT
);

INSERT INTO users (username, password, role) VALUES ('bobsmith', 'secretpassword789', 'moderator');
INSERT INTO users (username, password, role) VALUES ('johndoe', 'password123', 'admin');
INSERT INTO users (username, password, role) VALUES ('janedoe', 'pa$$word456', 'author');


INSERT INTO posts (title,content, views, featured,user_id , status,permission_id) VALUES ('', 'No. of tourists is...', '333','FALSE','3','','3');


INSERT INTO comments (content, user_id, post_id) VALUES ('very good', '1','1');


INSERT INTO categories (name, description) VALUES ('food', 'tasty foods');
INSERT INTO categories (name, description) VALUES ('entertainment', 'comedy show');
INSERT INTO categories (name, description) VALUES ('sports', 'football');

INSERT INTO post_categories (post_id, category_id) VALUES ('1','1');

SELECT *
FROM posts as p
JOIN post_categories as pc ON p.id = pc.post_id
JOIN categories as c ON c.id = pc.category_id
WHERE c.name = 'food';


SELECT *
FROM posts as p
WHERE p.featured = true;

SELECT id, MAX(views) AS post_views
FROM posts
GROUP BY id;