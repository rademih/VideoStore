package controllers;

import exceptions.ServiceException;
import play.cache.CacheApi;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.concurrent.Callable;

abstract class BaseController extends Controller {

	CacheApi cache;

	@Inject
	FormFactory formFactory;

	@Inject
	public void setCache(CacheApi cache) {
		this.cache = cache;
	}

	private Result catchExceptions(final Callable block) {
		try {
			return (Result) block.call();
		} catch (ServiceException se) {
			String message = se.getMessage() != null ? se.getMessage() : "Unknown Error";
			return badRequest(Json.toJson(se.getMessage()));
		} catch (Exception e) {
			String message = e.getMessage() != null ? e.getMessage() : "Unknown Error";
			return internalServerError(Json.toJson(e.getMessage()));
		}
	}

	Result wrapForPublic(final Callable block) {
		return catchExceptions(() -> ok(Json.toJson(block.call())));
	}
}

