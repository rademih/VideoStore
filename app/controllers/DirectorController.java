package controllers;

import models.tables.Director;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.DirectorService;

import javax.inject.Inject;

/**
 * The type Author controller.
 */
public class DirectorController extends BaseController {

	private DirectorService service;

	@Inject
	public void setService(final DirectorService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getDirector(final Integer directorId) {
		return wrapForPublic(() -> this.service.getDirector(directorId));
	}

	@Transactional
	public Result createDirector() {
		return wrapForPublic(() -> this.service.createDirector(formFactory.form(Director.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deleteDirector(final Integer directorId) {
		return wrapForPublic(() -> this.service.deleteDirector(directorId));
	}

	@Transactional(readOnly = true)
	public Result getAllDirectors() {
		return wrapForPublic(() -> this.service.getAllDirectors());
	}
}
