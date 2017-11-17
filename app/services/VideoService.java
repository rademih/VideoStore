package services;

import models.tables.Video;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class VideoService extends BaseService {

	@Inject
	private VideoService() { }

	@SuppressWarnings("unchecked")
	public List<Video> getAllVideos() {
		return (List<Video>) getSession().createCriteria(Video.class)
				.list();
	}

	public Video getVideo(final Integer videoId) {
		return (Video) getSession().createCriteria(Video.class)
				.add(Restrictions.eq("id", videoId))
				.uniqueResult();
	}

	public Boolean deleteVideo(final Integer videoId) throws Exception {
		Video video = (Video) getSession().createCriteria(Video.class)
				.add(Restrictions.eq("id", videoId))
				.uniqueResult();

		getSession().delete(video);
		return true;
	}
}
