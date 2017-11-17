package services;

import models.tables.TvShow;
import models.helpers.VideoFilter;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class TvShowService extends BaseService {

	private static final String ORDER_KEY = "title";

	@Inject
	private TvShowService() {
	}

	@SuppressWarnings("unchecked")
	public List<TvShow> getAllTvShows(VideoFilter videoFilter) {
		Criteria criteria = getSession().createCriteria(TvShow.class);
		criteria.addOrder(Order.desc("rating"));
		criteria.setMaxResults(10);

		if (videoFilter.title != null) {
			criteria.add(Restrictions.ilike("title", videoFilter.title, MatchMode.ANYWHERE));
		}

		List<TvShow> tvShows = criteria.list();

		switch (videoFilter.sortBy) {
		case "date":
			tvShows.sort((o1, o2) -> o2.getReleaseDate().compareTo(o1.getReleaseDate()));
			break;
		}
		
		return tvShows;
	}

	public TvShow getTvShow(final Integer tvShowId) {
		return (TvShow) getSession().createCriteria(TvShow.class).add(Restrictions.eq("id", tvShowId)).uniqueResult();
	}

	public Boolean createTvShow(final TvShow tvShow) throws Exception {
		getSession().save(tvShow);
		return true;
	}

	public Boolean editTvShow(final TvShow tvShow) throws Exception {
		getSession().update(tvShow);
		return true;
	}

	public Boolean deleteTvShow(final Integer tvShowId) throws Exception {
		TvShow tvShow = (TvShow) getSession().createCriteria(TvShow.class).add(Restrictions.eq("id", tvShowId))
				.uniqueResult();

		getSession().delete(tvShow);
		return true;
	}
}
