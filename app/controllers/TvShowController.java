package controllers;

import models.tables.TvShow;
import models.helpers.VideoFilter;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.TvShowService;

import javax.inject.Inject;

public class TvShowController extends BaseController {

	private static final String TITLE_FILTER = "titleFilter";
	private static final String SORT_BY = "sortBy";

	private TvShowService service;

	@Inject
	public void setService(final TvShowService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getTvShow(final Integer tvShowId) {
		return wrapForPublic(() -> this.service.getTvShow(tvShowId));
	}

	@Transactional
	public Result createTvShow() {
		return wrapForPublic(() -> this.service.createTvShow(formFactory.form(TvShow.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deleteTvShow(final Integer tvShowId) {
		return wrapForPublic(() -> this.service.deleteTvShow(tvShowId));
	}
	@Transactional
	public Result editTvShow() {
		return wrapForPublic(() -> this.service.editTvShow(formFactory.form(TvShow.class).bindFromRequest().get()));
	}
	@Transactional(readOnly = true)
	public Result getAllTvShows() {
		return wrapForPublic(() -> this.service.getAllTvShows(
			VideoFilter.createFilter()
			.setTitleFilter(request().getQueryString(TITLE_FILTER))
			.setSort(request().getQueryString(SORT_BY))
		));
	}
}

