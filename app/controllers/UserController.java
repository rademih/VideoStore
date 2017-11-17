package controllers;

import models.tables.User;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.UserService;

import javax.inject.Inject;

public class UserController extends BaseController {

	private UserService service;

	@Inject
	public void setService(final UserService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getUser(final Integer userId) {
		return wrapForPublic(() -> this.service.getUser(userId));
	}

	@Transactional
	public Result createUser() {
		return wrapForPublic(() -> this.service.createUser(formFactory.form(User.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deleteUser(final Integer userId) {
		return wrapForPublic(() -> this.service.deleteUser(userId));
	}

	@Transactional(readOnly = true)
	public Result getAllUsers() {
		return wrapForPublic(() -> this.service.getAllUsers());
	}
	@Transactional
	public Result emailIsExist(final String email) {
		return wrapForPublic(() -> this.service.emailIsExist(email));
	}

}
