package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie extends Video {

	@Column(name = "box_office")
	private Double boxOffice;

	public Double getBoxOffice() { return boxOffice; }

	public void setBoxOffice(Double boxOffice) {	this.boxOffice = boxOffice; }
}

