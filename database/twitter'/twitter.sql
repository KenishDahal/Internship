-- Active: 1677573903358@@127.0.0.1@5432@twitter@public

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_information TEXT
);

INSERT INTO users (username, email, password,profile_information) VALUES ('Dev', 'dev@gmail.com', 'dev', 'i am handsome');
INSERT INTO users (username, email, password,profile_information) VALUES ('Binaya', 'dev@gmail.com', 'dev', 'i am handsome');
INSERT INTO users (username, email, password,profile_information) VALUES ('Sitaram', 'dev@gmail.com', 'dev', 'i am handsome');


UPDATE users SET email = 'binaya@example.com' WHERE user_id = 2;

UPDATE users SET email = 'sitaram@example.com', password = 'newpassword123' WHERE user_id = 3;

SELECT * FROM users WHERE email = 'binaya@example.com' AND password = 'dev';


CREATE TABLE tweets (
  tweet_id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  user_id INTEGER NOT NULL REFERENCES users(user_id)
);

INSERT INTO tweets (content,user_id) VALUES ( 'Just posted my first tweet!',1);
INSERT INTO tweets (content,user_id) VALUES ( 'Just posted my second tweet!',2);
INSERT INTO tweets (content,user_id) VALUES ( 'Just posted my thiord tweet!',3);


CREATE TABLE followers (
  follower_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(user_id),
  follower_user_id INTEGER NOT NULL REFERENCES users(user_id)
);

ALTER TABLE followers
ADD followee_user_id INTEGER NOT NULL REFERENCES users(user_id);



INSERT INTO followers (follower_user_id, followee_user_id) VALUES (1, 1);
INSERT INTO followers (follower_user_id, followee_user_id) VALUES (2, 2);
INSERT INTO followers (follower_user_id, followee_user_id) VALUES (3, 3);
INSERT INTO followers (follower_user_id, followee_user_id) VALUES (3, 2);

UPDATE followers SET followee_user_id = 3 WHERE follower_user_id = 2;
UPDATE followers SET followee_user_id = 1  WHERE follower_user_id = 3;

ALTER TABLE followers
DROP COLUMN user_id;

SELECT users.username , followers.follower_user_id
FROM  followers
INNER JOIN users ON users.user_id = followers.follower_user_id
WHERE followee_user_id = 1;

CREATE TABLE likes (
  like_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(user_id),
  tweet_id INTEGER NOT NULL REFERENCES tweets(tweet_id)
);

INSERT INTO likes (user_id,tweet_id)
VALUES (1, 2);

INSERT INTO likes (user_id,tweet_id)
VALUES (1, 3);
INSERT INTO likes (user_id,tweet_id)
VALUES (2, 2);

INSERT INTO likes (user_id,tweet_id)
VALUES (2, 1);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  user_id INTEGER NOT NULL REFERENCES users(user_id),
  tweet_id INTEGER NOT NULL REFERENCES tweets(tweet_id)
);

CREATE TABLE hashtags (
  hashtag_id SERIAL PRIMARY KEY,
  text VARCHAR(140) NOT NULL
);

INSERT INTO hashtags (text)
VALUES ('food');
INSERT INTO hashtags (text)
VALUES ('tourism');
INSERT INTO hashtags (text)
VALUES ('sports');


CREATE TABLE tweet_hashtags (
  tweet_id INTEGER NOT NULL REFERENCES tweets(tweet_id),
  hashtag_id INTEGER NOT NULL REFERENCES hashtags(hashtag_id),
  PRIMARY KEY(tweet_id, hashtag_id)
);

INSERT INTO tweet_hashtags (tweet_id,hashtag_id)
VALUES (1,1);
INSERT INTO tweet_hashtags (tweet_id,hashtag_id)
VALUES (2,2);
INSERT INTO tweet_hashtags (tweet_id,hashtag_id)
VALUES (3,1);

CREATE TABLE trending (
  trending_id SERIAL PRIMARY KEY,
  hashtag_id INTEGER NOT NULL REFERENCES hashtags(hashtag_id),
  count INTEGER NOT NULL,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW()
); 

- INSERT INTO tweet_hashtags (tweet_id,hashtag_id);
-- VALUES (3,1);

SELECT text, count(*) AS count 
FROM trending
JOIN hashtags ON hashtags.hashtag_id = trending.trending_id 
WHERE timestamp > NOW() - INTERVAL '24 HOURS'
GROUP BY text
ORDER BY count DESC 
LIMIT 5;

