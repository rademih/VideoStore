package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "review")
public class Review {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;

	@Column(name = "video_id")
	private Integer videoId;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

	@Column(name = "rating")
	private Integer rating;

	public Review() { }

	public Integer getId() { return id; }

	public void setId(Integer id) { this.id = id; }

	public Integer getVideoId() { return videoId; }

	public void setVideoId(Integer videoId) { this.videoId = videoId; }

	public User getUser() { return user; }

	public void setUser(User user) { this.user = user; }

	public Integer getRating() { return rating; }

	public void setRating(Integer rating) { this.rating = rating; }
}
