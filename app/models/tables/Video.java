package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import java.util.Date;
import java.util.List;
import java.util.OptionalDouble;

@Entity
@Table(name = "video")
@Inheritance(strategy = InheritanceType.JOINED)
public class Video {

    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
	private String description;

    @Column(name = "duration")
	private String duration;

    @Column(name = "release_date")
	private Date releaseDate;

    @Column(name = "rental_price")
	private Double rentalPrice;

	@Column(name = "purchase_price")
	private Double purchasePrice;

	@Column(name ="rating")
	private Integer rating;

    @ManyToOne
	@JoinColumn(name = "director_id", referencedColumnName = "id")
	private Director director;

	@OneToMany(mappedBy = "videoId")
	private List<Review> reviews;

	

	public Video() {}

	public Integer getId() { return id;	}

	public void setId(Integer id) {	this.id = id; }

	public String getTitle() { return title; }

	public void setTitle(String title) { this.title = title; }

	public String getDescription() { return description; }

	public void setDescription(String description) { this.description = description; }

	public String getDuration() { return duration; }

	public void setDuration(String duration) { this.duration = duration; }

	public Date getReleaseDate() { return releaseDate; }

	public void setReleaseDate(Date releaseDate) { this.releaseDate = releaseDate; }

	public Double getRentalPrice() { return rentalPrice; }

	public void setRentalPrice(Double rentalPrice) { this.rentalPrice = rentalPrice; }

	public Director getDirector() {	return director; }

	public void setDirector(Director director) { this.director = director; }

	public Double getPurchasePrice() { return purchasePrice;	}

	public void setPurchasePrice(Double purchasePrice) {	this.purchasePrice = purchasePrice; }

	public List<Review> getReviews() {	return this.reviews; }

	public void setReviews(List<Review> reviews) { this.reviews = reviews; }

	public Integer getRating() { return rating;	}
	
	public void setRating(Integer rating) {	this.rating = rating; }	
}
