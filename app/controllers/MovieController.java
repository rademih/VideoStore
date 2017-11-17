package controllers;

import models.tables.Movie;
import models.helpers.VideoFilter;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.MovieService;

import javax.inject.Inject;

public class MovieController extends BaseController {

	private static final String TITLE_FILTER = "titleFilter";
	private static final String SORT_BY = "sortBy";
	private MovieService service;

	@Inject
	public void setService(final MovieService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getMovie(final Integer movieId) {
		return wrapForPublic(() -> this.service.getMovie(movieId));
	}

	@Transactional
	public Result createMovie() {
		return wrapForPublic(() -> this.service.createMovie(formFactory.form(Movie.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deleteMovie(final Integer movieId) {
		return wrapForPublic(() -> this.service.deleteMovie(movieId));
	}
	@Transactional
	public Result editMovie() {
		return wrapForPublic(() -> this.service.editMovie(formFactory.form(Movie.class).bindFromRequest().get()));
	}

	@Transactional(readOnly = true)
	public Result getAllMovies() {
		return wrapForPublic(() -> this.service.getAllMovies(
			VideoFilter.createFilter()
			.setTitleFilter(request().getQueryString(TITLE_FILTER))
			.setSort(request().getQueryString(SORT_BY))
		));
	}
}

