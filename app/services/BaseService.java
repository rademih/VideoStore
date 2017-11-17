package services;

import org.hibernate.Session;
import org.hibernate.jpa.HibernateEntityManager;
import play.db.jpa.JPA;

import java.util.Base64;

abstract class BaseService {
    
	Session getSession() {
		return ((HibernateEntityManager) JPA.em()).getSession();
	}
}