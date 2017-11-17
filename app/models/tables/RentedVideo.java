package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import java.util.Date;

@Entity
@Table(name = "rented_video")
public class RentedVideo {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;

	@Column(name = "date")
	private Date date;


	@ManyToOne
	@JoinColumn(name = "video_id", referencedColumnName = "id")
	private Video video;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

	public RentedVideo() { }

	public Integer getId() { return id; }

	public void setId(Integer id) { this.id = id; }

	public Video getVideo() { return video; }

	public void setVideo(Video video) { this.video = video; }

	public User getUser() { return user; }

	public void setUser(User user) { this.user = user; }

	public Date getDate() { return date; }
	
	public void setDate(Date date) { this.date = date; }
    
}
