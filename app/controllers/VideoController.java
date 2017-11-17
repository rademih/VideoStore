package controllers;

import models.tables.Video;
import play.db.jpa.Transactional;
import play.mvc.Result;
import services.VideoService;

import javax.inject.Inject;

public class VideoController extends BaseController {

	private VideoService service;

	@Inject
	public void setService(final VideoService service) {
		this.service = service;
	}

	@Transactional(readOnly = true)
	public Result getVideo(final Integer videoId) {
		return wrapForPublic(() -> this.service.getVideo(videoId));
	}

	@Transactional
	public Result deleteVideo(final Integer videoId) {
		return wrapForPublic(() -> this.service.deleteVideo(videoId));
	}

	@Transactional(readOnly = true)
	public Result getAllVideos() {
		return wrapForPublic(() -> this.service.getAllVideos());
	}
}
