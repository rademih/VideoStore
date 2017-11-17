package services;

import models.helpers.VideoFilter;
import models.tables.Movie;
import models.tables.Review;
import models.helpers.VideoRatingBean;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;

import org.hibernate.Criteria;
import org.hibernate.criterion.MatchMode;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;
import java.util.stream.Collectors;

@Singleton
public class MovieService extends BaseService {

	@Inject
	private MovieService() {
	}

	@SuppressWarnings("unchecked")
	public List<Movie> getAllMovies(VideoFilter videoFilter) {
		Criteria criteria = getSession().createCriteria(Movie.class);
		criteria.addOrder(Order.desc("rating"));
		criteria.setMaxResults(10);

		if (videoFilter.title != null) {
			criteria.add(Restrictions.ilike("title", videoFilter.title, MatchMode.ANYWHERE));
		}

		List<Movie> movies = criteria.list();

		switch (videoFilter.sortBy) {
		case "date":
			movies.sort((o1, o2) -> o2.getReleaseDate().compareTo(o1.getReleaseDate()));
			break;
		}

		return movies;
	}

	public Movie getMovie(final Integer movieId) {
		return (Movie) getSession().createCriteria(Movie.class).add(Restrictions.eq("id", movieId)).uniqueResult();
	}

	public Boolean createMovie(final Movie movie) throws Exception {
		getSession().save(movie);
		return true;
	}

	public Boolean editMovie(final Movie movie) throws Exception {
		getSession().update(movie);
		return true;
	}

	public Boolean deleteMovie(final Integer movieId) throws Exception {
		Movie movie = (Movie) getSession().createCriteria(Movie.class).add(Restrictions.eq("id", movieId))
				.uniqueResult();

		getSession().delete(movie);
		return true;
	}
}
