# --- !Ups

CREATE TABLE IF NOT EXISTS director(
 id Integer PRIMARY KEY NOT NULL,
 first_name Character varying(30) NOT NULL,
 last_name Character varying(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS video(
 id Integer PRIMARY KEY NOT NULL,
 title Character varying(50) NOT NULL,
 duration Character varying(10) NOT NULL,
 release_date Date NOT NULL,
 rental_price Double precision NOT NULL,
 purchase_price Double precision NOT NULL,
 description text,
 rating Integer NOT NULL,
 director_id Integer NOT NULL REFERENCES director(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS movie(
 id Integer PRIMARY KEY NOT NULL REFERENCES video(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 box_office Double precision NOT NULL
);

CREATE TABLE IF NOT EXISTS tv_show(
 id Integer PRIMARY KEY NOT NULL REFERENCES video(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 season Integer NOT NULL,
 episode Integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "user"(
 id Integer PRIMARY KEY NOT NULL,
 name Character varying(30) NOT NULL,
 email Character varying(50) NOT NULL CONSTRAINT email UNIQUE ,
 password text NOT NULL,
 is_admin boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS purchased_video(
 user_id Integer NOT NULL REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 video_id Integer NOT NULL REFERENCES video(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 "date" Date NOT NULL,
 id Integer PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS rented_video(
 id Integer PRIMARY KEY NOT NULL,
 user_id Integer NOT NULL REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 video_id Integer NOT NULL REFERENCES video(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 "date" Date NOT NULL
);

CREATE TABLE IF NOT EXISTS review(
 user_id Integer NOT NULL REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 video_id Integer NOT NULL REFERENCES video(id) ON UPDATE CASCADE ON DELETE RESTRICT,
 rating Integer NOT NULL,
 id Integer PRIMARY KEY NOT NULL
);
CREATE SEQUENCE hibernate_sequence
 INCREMENT BY 1
 NO MAXVALUE
 NO MINVALUE
 START WITH 100
 CACHE 1
;

# --- !Downs
DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS rented_video;
DROP TABLE IF EXISTS purchased_video;
DROP TABLE IF EXISTS movie;
DROP TABLE IF EXISTS tv_show;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS director;
DROP TABLE IF EXISTS "user";


