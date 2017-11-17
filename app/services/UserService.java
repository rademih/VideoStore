package services;

import models.tables.User;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class UserService extends BaseService {

	private static final String ORDER_KEY = "name";

	@Inject
	private UserService() { }

	@SuppressWarnings("unchecked")
	public List<User> getAllUsers() {
		return (List<User>) getSession().createCriteria(User.class)
				.addOrder(Order.asc(ORDER_KEY))
				.list();
	}

	public User getUser(final Integer userId) {
		return (User) getSession().createCriteria(User.class)
				.add(Restrictions.eq("id", userId))
				.uniqueResult();
	}

	public Boolean createUser(final User user) throws Exception {
		getSession().save(user);
		return true;
	}

	public Boolean editUser(final User user) throws Exception {
		getSession().update(user);
		return true;
	}

	public Boolean deleteUser(final Integer userId) throws Exception {
		User user = (User) getSession().createCriteria(User.class)
				.add(Restrictions.eq("id", userId))
				.uniqueResult();

		getSession().delete(user);
		return true;
	}
	public Boolean emailIsExist(final String email) throws Exception {
		User user = (User) getSession().createCriteria(User.class)
		.add(Restrictions.eq("email",email))
		.uniqueResult();
		if(user!=null){
			return true;
		}
		return false;
	}
}
