package services;

import models.tables.Director;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class DirectorService extends BaseService {

	private static final String ORDER_KEY = "lastName";

	@Inject
	private DirectorService() { }

	@SuppressWarnings("unchecked")
	public List<Director> getAllDirectors() {
		return (List<Director>) getSession().createCriteria(Director.class)
				.addOrder(Order.asc(ORDER_KEY))
				.list();
	}

	public Director getDirector(final Integer directorId) {
		return (Director) getSession().createCriteria(Director.class)
				.add(Restrictions.eq("id", directorId))
				.uniqueResult();
	}

		public Boolean createDirector(final Director director) throws Exception {
		getSession().save(director);
		return true;
	}



	public Boolean editDirector(final Director director) throws Exception {
		getSession().update(director);
		return true;
	}

	public Boolean deleteDirector(final Integer directorId) throws Exception {
		Director director = (Director) getSession().createCriteria(Director.class)
				.add(Restrictions.eq("id", directorId))
				.uniqueResult();

		getSession().delete(director);
		return true;
	}
}
