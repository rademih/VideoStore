# --- !Ups

INSERT INTO public.director(id, first_name, last_name)	VALUES (1, 'Frank', 'Darabont');
INSERT INTO public.director(id, first_name, last_name)	VALUES (2, 'Steven', 'Spielberg');
INSERT INTO public.director(id, first_name, last_name)	VALUES (3, 'Martin', 'Scorsese ');
INSERT INTO public.director(id, first_name, last_name)	VALUES (4, 'Alfred', 'Hitchcock ');
INSERT INTO public.director(id, first_name, last_name)	VALUES (5, 'Stanley', 'Kubrick ');
INSERT INTO public.director(id, first_name, last_name)	VALUES (6, 'Quentin', 'Tarantino');
INSERT INTO public.director(id, first_name, last_name)	VALUES (7, 'Ridley', 'Scott');
INSERT INTO public.director(id, first_name, last_name)	VALUES (8, 'Joel', 'Coen');
INSERT INTO public.director(id, first_name, last_name)	VALUES (9, 'John', 'Ford');
INSERT INTO public.director(id, first_name, last_name)	VALUES (10, 'Woody', 'Allen');
INSERT INTO public.director(id, first_name, last_name)	VALUES (11, 'Miguel', 'Sapochnik');
INSERT INTO public.director(id, first_name, last_name)	VALUES (12, 'Vince', 'Gilligan');


INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (1, 'The Shawshank Redemption', '2h 22m', '22/9/1994', 2.99, 59.99, 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.', 1,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (2, 'The Green Mile', '3h 9m', '10/12/1999', 2.59, 45.99, 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people''s ailments. When the cellblock''s head guard, Paul Edgecomb, recognizes Coffey''s miraculous gift, he tries desperately to help stave off the condemned man ''s execution.', 1,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (3, 'Schindler''s List', '3h 15m', '4/2/1994', 2.55, 19.99, 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.', 2,2);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (4, 'Indiana Jones and the Kingdom of the Crystal Skull', '2h 2m', '22/5/2008', 1.95, 22.55, 'Famed archaeologist and adventurer Dr. Henry "Indiana" Jones, Jr. is called back into action, when he becomes entangled in a Soviet plot to uncover the secret behind mysterious artifacts known as the Crystal Skulls.',2,1);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (5, 'The Wolf of Wall Street', '3h', '25/12/2013', 2.59, 19.99, 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.', 3,1);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (6, 'Shutter Island', '2h 18m', '19/2/2010', 3.5, 32.0, 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.', 3,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (7, 'Vertigo', '2h 8m', '21/7/1958', 1.8, 10.0, 'A San Francisco detective suffering from acrophobia investigates the strange activities of an old friend''s wife, all the while becoming dangerously obsessed with her.', 4,4);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (8, 'Psycho', '1h 49m', '8/9/1960', 2.0, 15.0, 'A Phoenix secretary embezzles $40,000 from her employer''s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', 4,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (9, 'A Clockwork Orange', '2h 16m', '2/2/1972', 1.56, 12.0, 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn''t go as planned.', 5,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (10, 'Django Unchained', '2h 45m', '25/12/2012', 1.7, 17.0, 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.', 6,2);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (11, 'Kill Bill: Vol. 2', '2h 17m', '16/4/2004', 2.8, 20.0, 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd and the treacherous, one-eyed Elle.', 6,1);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (12, 'The Martian', '2h 24m', '2/10/2015', 2.5, 25.0, 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.', 7,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (13, 'Robin Hood', ' 2h 20m', '14/5/2010', 3.0, 21.0, 'In 12th century England, Robin and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.', 7,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (14, 'Hail, Caesar!', '1h 46m', '5/2/2016', 2.5, 16.8, 'A Hollywood fixer in the 1950s works to keep the studio''s stars in line.', 8,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (15, 'Fargo', '1h 38m', '5/4/1996', 2.6, 15.3,'Jerry Lundegaard''s inept crime falls apart due to his and his henchmen''s bungling and the persistent police work of the quite pregnant Marge Gunderson.', 8,4);

INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (16, 'The Walking Dead', '1h 7min', '31/12/2010', 1.59, 15.99, 'After being shot, Deputy Sheriff Rick Grimes awakens from a coma to find the world overrun by the undead, and sets off to find his family.', 1,2);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (17, 'Amazing Stories', '30m', '29/9/1985', 1.0, 12.0, 'Truly amazing, fantastical, funny, and odd, and sometimes scary, sad, and endearing stories are portrayed. Many famous actors, actresses, and directors make guest appearances.', 3,1);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (18, 'Vinyl','1h', '14/2/2016', 1.2, 7.0, 'Richie Finestra considers selling his struggling record company;; Richie takes a detour to an unplanned reunion with Lester Grimes;; Richie orders his A&R department to find new acts;; Richie jeopardizes his relationships with his wife and children.', 3,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (19, 'Alfred Hitchcock Presents', '25m', '12/5/1958', 0.9, 11.1, 'Series of unrelated short stories covering elements of crime, horror, drama, and comedy about people of different backgrounds committing murders, suicides, thefts, and other sorts of crime caused by certain motivations, perceived or not.', 4,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (20, 'Crisis in Six Scenes', '23m', '30/9/2016', 1.0, 10.0, 'Crisis in Six Scenes is a comedy that takes place in the 1960''s during turbulent times in the United States and a middle class suburban family is visited by a guest who turns their household completely upside down.', 10,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (21, 'Game of Thrones', '58m', '6/4/2014', 4.0, 36.0, 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected…', 11,2);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (22, 'Game of Thrones', '58m', '6/4/2014', 4.0, 36.0, 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected…', 11,4);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (23, 'Game of Thrones', '58m', '6/4/2014', 4.0, 36.0, 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected…', 11,4);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (24, 'The Walking Dead', '1h 7min', '31/12/2010', 1.59, 15.99, 'After being shot, Deputy Sheriff Rick Grimes awakens from a coma to find the world overrun by the undead, and sets off to find his family.', 1,1);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (25, 'The Walking Dead', '1h 7min', '31/12/2010', 1.59, 15.99, 'After being shot, Deputy Sheriff Rick Grimes awakens from a coma to find the world overrun by the undead, and sets off to find his family.', 1,2);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (26, 'Breaking bad', '49m', '9/5/2010', 3.0, 23.0, 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family''s future.', 12,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (27, 'Breaking bad', '49m', '9/5/2010', 3.0, 23.0, 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family''s future.', 12,4);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (28, 'Breaking bad', '49m', '9/5/2010', 3.0, 23.0, 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family''s future.', 12,5);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)	
    VALUES (29, 'Breaking bad', '49m', '9/5/2010', 3.0, 23.0, 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family''s future.', 12,3);
INSERT INTO public.video(id, title, duration, release_date, rental_price, purchase_price, description, director_id, rating)
	VALUES (30, 'Game of Thrones', '58m', '6/4/2014', 4.0, 36.0, 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected…', 11,5);


INSERT INTO public.movie(id, box_office) VALUES (1, 25000000);
INSERT INTO public.movie(id, box_office) VALUES (2, 60000000);
INSERT INTO public.movie(id, box_office) VALUES (3, 22000000);
INSERT INTO public.movie(id, box_office) VALUES (4, 185000000);
INSERT INTO public.movie(id, box_office) VALUES (5, 100000000);
INSERT INTO public.movie(id, box_office) VALUES (6, 80000000);
INSERT INTO public.movie(id, box_office) VALUES (7, 2479000);
INSERT INTO public.movie(id, box_office) VALUES (8, 806948);
INSERT INTO public.movie(id, box_office) VALUES (9, 2200000);
INSERT INTO public.movie(id, box_office) VALUES (10, 100000000);
INSERT INTO public.movie(id, box_office) VALUES (11, 30000000);
INSERT INTO public.movie(id, box_office) VALUES (12, 108000000);
INSERT INTO public.movie(id, box_office) VALUES (13, 200000000);
INSERT INTO public.movie(id, box_office) VALUES (14, 22000000);
INSERT INTO public.movie(id, box_office) VALUES (15, 7000000);

INSERT INTO public.tv_show(id, season, episode)	VALUES (16, 1, 1);
INSERT INTO public.tv_show(id, season, episode)	VALUES (17, 1, 1);
INSERT INTO public.tv_show(id, season, episode)	VALUES (18, 1, 2);
INSERT INTO public.tv_show(id, season, episode)	VALUES (19, 2, 5);
INSERT INTO public.tv_show(id, season, episode)	VALUES (20, 5, 7);
INSERT INTO public.tv_show(id, season, episode)	VALUES (21, 4, 8);
INSERT INTO public.tv_show(id, season, episode)	VALUES (22, 2, 9);
INSERT INTO public.tv_show(id, season, episode)	VALUES (23, 3, 1);
INSERT INTO public.tv_show(id, season, episode)	VALUES (24, 6, 2);
INSERT INTO public.tv_show(id, season, episode)	VALUES (25, 4, 4);
INSERT INTO public.tv_show(id, season, episode)	VALUES (26, 1, 7);
INSERT INTO public.tv_show(id, season, episode)	VALUES (27, 2, 6);
INSERT INTO public.tv_show(id, season, episode)	VALUES (28, 2, 7);
INSERT INTO public.tv_show(id, season, episode)	VALUES (29, 3, 9);
INSERT INTO public.tv_show(id, season, episode)	VALUES (30, 4, 7);

INSERT INTO "user"(id, name,email,password,is_admin) VALUES (1,'admin','admin@email.com','$2a$10$hn2Qplt8gjFfPFQJA1QyzuAprhXezjgnm6lRb5APYDsLVHrjOQp4K',true);
INSERT INTO "user"(id, name,email,password,is_admin) VALUES (2, 'user1', 'user1@email.com','$2a$10$nOaqh4.BysUsABAfW9xAdOZdY0ksLSYrSD0v04QJL8RNDUL1OHVUW',false);
INSERT INTO "user"(id, name,email,password,is_admin) VALUES (3, 'user2','user@email.com', '$2a$10$kQ.Ih6yxYsitkQjsgVigXe9FW4uH88alFzhhkEEspnTob4Iwvybxy',false);

insert into rented_video (id, user_id, video_id, date) values (1, 2, 16, '07/02/2017');
insert into rented_video (id, user_id, video_id, date) values (2, 3, 17, '28/06/2017');
insert into rented_video (id, user_id, video_id, date) values (3, 2, 5, '02/09/2017');
insert into rented_video (id, user_id, video_id, date) values (4, 2, 24, '09/12/2016');
insert into rented_video (id, user_id, video_id, date) values (5, 3, 22, '13/01/2017');
insert into rented_video (id, user_id, video_id, date) values (6, 3, 11, '24/04/2017');
insert into rented_video (id, user_id, video_id, date) values (7, 3, 21, '22/04/2017');
insert into rented_video (id, user_id, video_id, date) values (8, 3, 5, '22/03/2017');
insert into rented_video (id, user_id, video_id, date) values (9, 3, 26, '08/08/2017');
insert into rented_video (id, user_id, video_id, date) values (10, 3, 26, '30/11/2016');
insert into rented_video (id, user_id, video_id, date) values (11, 2, 10, '08/04/2017');
insert into rented_video (id, user_id, video_id, date) values (12, 3, 13, '12/10/2017');
insert into rented_video (id, user_id, video_id, date) values (13, 2, 26, '26/10/2017');
insert into rented_video (id, user_id, video_id, date) values (14, 2, 11, '30/05/2017');
insert into rented_video (id, user_id, video_id, date) values (15, 2, 22, '22/07/2017');
insert into rented_video (id, user_id, video_id, date) values (16, 3, 29, '27/10/2017');
insert into rented_video (id, user_id, video_id, date) values (17, 2, 14, '06/03/2017');
insert into rented_video (id, user_id, video_id, date) values (18, 3, 24, '20/05/2017');
insert into rented_video (id, user_id, video_id, date) values (19, 2, 26, '17/02/2017');
insert into rented_video (id, user_id, video_id, date) values (20, 3, 16, '13/01/2017');

insert into purchased_video (id, user_id, video_id, date) values (1, 3, 17, '21/03/2017');
insert into purchased_video (id, user_id, video_id, date) values (2, 2, 5, '28/02/2017');
insert into purchased_video (id, user_id, video_id, date) values (3, 2, 11, '28/12/2016');
insert into purchased_video (id, user_id, video_id, date) values (4, 3, 20, '18/04/2017');
insert into purchased_video (id, user_id, video_id, date) values (5, 3, 10, '06/01/2017');
insert into purchased_video (id, user_id, video_id, date) values (6, 3, 13, '25/01/2017');
insert into purchased_video (id, user_id, video_id, date) values (7, 3, 3, '15/05/2017');
insert into purchased_video (id, user_id, video_id, date) values (8, 3, 4, '09/01/2017');
insert into purchased_video (id, user_id, video_id, date) values (9, 2, 9, '21/12/2016');
insert into purchased_video (id, user_id, video_id, date) values (10, 2, 7, '05/06/2017');
insert into purchased_video (id, user_id, video_id, date) values (11, 3, 25, '11/08/2017');
insert into purchased_video (id, user_id, video_id, date) values (12, 3, 27, '24/07/2017');
insert into purchased_video (id, user_id, video_id, date) values (13, 3, 17, '12/09/2017');
insert into purchased_video (id, user_id, video_id, date) values (14, 3, 10, '16/10/2017');
insert into purchased_video (id, user_id, video_id, date) values (15, 2, 19, '21/12/2016');
insert into purchased_video (id, user_id, video_id, date) values (16, 2, 23, '29/03/2017');
insert into purchased_video (id, user_id, video_id, date) values (17, 3, 26, '22/05/2017');
insert into purchased_video (id, user_id, video_id, date) values (18, 2, 6, '14/12/2016');
insert into purchased_video (id, user_id, video_id, date) values (19, 3, 14, '12/06/2017');
insert into purchased_video (id, user_id, video_id, date) values (20, 3, 24, '01/03/2017');

# --- !Downs

TRUNCATE "user",purchased_video,rented_video,video, movie, tv_show, director CASCADE;