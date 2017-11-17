package models.tables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "director")
public class Director {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@Column(name = "first_name", nullable=false)
	private String firstName;

    @Column(name = "last_name", nullable=false)
	private String lastName;

	public Director(){}

	public Integer getId() { return id; }

	public void setId(Integer id) { this.id = id; }

	public String getFirstName() { return firstName; }

	public void setFirstIme(String firstName) { this.firstName = firstName; }

	public String getLastName() { return lastName; }

	public void setLastName(String lastName) { this.lastName = lastName; }

	
}