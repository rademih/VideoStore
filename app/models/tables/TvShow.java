package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tv_show")
public class TvShow extends Video {

	@Column(name = "season")
	private Integer season;

    @Column(name = "episode")
    private Integer episode;

	public Integer getSeason() { return season; }

	public void setSeason(Integer season) {	this.season = season; }

	public Integer getEpisode() { return episode; }

	public void setEpisode(Integer episode) { this.episode = episode; }    
}

