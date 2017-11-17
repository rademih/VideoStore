package controllers;

import models.tables.PurchasedVideo;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.PurchasedVideoService;

import javax.inject.Inject;

public class PurchasedVideoController extends BaseController {

	private PurchasedVideoService service;

	@Inject
	public void setService(final PurchasedVideoService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getPurchasedVideo(final Integer purchasedVideoId) {
		return wrapForPublic(() -> this.service.getPurchasedVideo(purchasedVideoId));
	}

	@Transactional
	public Result createPurchasedVideo() {
		return wrapForPublic(() -> this.service.createPurchasedVideo(formFactory.form(PurchasedVideo.class).bindFromRequest().get()));
	}

	@Transactional
	public Result deletePurchasedVideo(final Integer purchasedVideoId) {
		return wrapForPublic(() -> this.service.deletePurchasedVideo(purchasedVideoId));
	}

	@Transactional(readOnly = true)
	public Result getAllUserPurchasedVideos(final Integer userId) {
		return wrapForPublic(() -> this.service.getAllUserPurchasedVideos(userId));
	}
	@Transactional(readOnly = true)
	public Result getAllPurchasedVideos() {
		return wrapForPublic(() -> this.service.getAllPurchasedVideos());
	}
}
