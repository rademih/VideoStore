package controllers;

import models.tables.RentedVideo;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.RentedVideoService;

import javax.inject.Inject;

public class RentedVideoController extends BaseController {

	private RentedVideoService service;

	@Inject
	public void setService(final RentedVideoService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getRentedVideo(final Integer rentedVideoId) {
		return wrapForPublic(() -> this.service.getRentedVideo(rentedVideoId));
	}

	@Transactional
	public Result createRentedVideo() {
		return wrapForPublic(() -> this.service.createRentedVideo(formFactory.form(RentedVideo.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deleteRentedVideo(final Integer rentedVideoId) {
		return wrapForPublic(() -> this.service.deleteRentedVideo(rentedVideoId));
	}

	@Transactional(readOnly = true)
	public Result getAllUserRentedVideos(final Integer userId) {
		return wrapForPublic(() -> this.service.getAllUserRentedVideos(userId));
	}
	@Transactional(readOnly = true)
	public Result getAllRentedVideos() {
		return wrapForPublic(() -> this.service.getAllRentedVideos());
	}
}
