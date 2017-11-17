package services;

import models.tables.PurchasedVideo;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.hibernate.Criteria;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class PurchasedVideoService extends BaseService {

	private static final String ORDER_KEY = "date";

	@Inject
	private PurchasedVideoService() {
	}

	@SuppressWarnings("unchecked")
	public List<PurchasedVideo> getAllUserPurchasedVideos(Integer userId) {
		Criteria criteria = getSession().createCriteria(PurchasedVideo.class);
		criteria.addOrder(Order.desc(ORDER_KEY));
		if(userId!=null && userId>0)
		{
			criteria.add(Restrictions.eq("user.id",userId));
		}
		return criteria.list();
	}
	
	@SuppressWarnings("unchecked")
	public List<PurchasedVideo> getAllPurchasedVideos() {
		return (List<PurchasedVideo>) getSession().createCriteria(PurchasedVideo.class)
				.addOrder(Order.asc(ORDER_KEY))
				.list();
	}

	public PurchasedVideo getPurchasedVideo(final Integer purchasedVideoId) {
		return (PurchasedVideo) getSession().createCriteria(PurchasedVideo.class).add(Restrictions.eq("id", purchasedVideoId))
				.uniqueResult();
	}

	public Boolean createPurchasedVideo(final PurchasedVideo purchasedVideo) throws Exception {
		getSession().save(purchasedVideo);
		return true;
	}

	public Boolean editPurchasedVideo(final PurchasedVideo purchasedVideo) throws Exception {
		getSession().update(purchasedVideo);
		return true;
	}

	public Boolean deletePurchasedVideo(final Integer purchasedVideoId) throws Exception {
		PurchasedVideo purchasedVideo = (PurchasedVideo) getSession().createCriteria(PurchasedVideo.class)
				.add(Restrictions.eq("id", purchasedVideoId)).uniqueResult();

		getSession().delete(purchasedVideo);
		return true;
	}
	
}
