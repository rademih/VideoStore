package services;

import models.tables.RentedVideo;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.Criteria;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class RentedVideoService extends BaseService {

	private static final String ORDER_KEY = "date";

	@Inject
	private RentedVideoService() {
	}

	@SuppressWarnings("unchecked")
	public List<RentedVideo> getAllUserRentedVideos(Integer userId) {
		Criteria criteria = getSession().createCriteria(RentedVideo.class);
		criteria.addOrder(Order.desc(ORDER_KEY));
		if(userId!=null && userId>0)
		{
			criteria.add(Restrictions.eq("user.id",userId));
		}
		return criteria.list();
	}
	
	@SuppressWarnings("unchecked")
	public List<RentedVideo> getAllRentedVideos() {
		return (List<RentedVideo>) getSession().createCriteria(RentedVideo.class)
				.addOrder(Order.asc(ORDER_KEY))
				.list();
	}

	public RentedVideo getRentedVideo(final Integer rentedVideoId) {
		return (RentedVideo) getSession().createCriteria(RentedVideo.class).add(Restrictions.eq("id", rentedVideoId))
				.uniqueResult();
	}

	public Boolean createRentedVideo(final RentedVideo rentedVideo) throws Exception {
		getSession().save(rentedVideo);
		return true;
	}

	public Boolean editRentedVideo(final RentedVideo rentedVideo) throws Exception {
		getSession().update(rentedVideo);
		return true;
	}

	public Boolean deleteRentedVideo(final Integer rentedVideoId) throws Exception {
		RentedVideo rentedVideo = (RentedVideo) getSession().createCriteria(RentedVideo.class)
				.add(Restrictions.eq("id", rentedVideoId)).uniqueResult();

		getSession().delete(rentedVideo);
		return true;
	}
}
