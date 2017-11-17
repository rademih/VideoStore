package models.tables;

import org.hibernate.criterion.Restrictions;
import org.hibernate.jpa.HibernateEntityManager;
import play.db.jpa.JPA;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.mindrot.jbcrypt.BCrypt;

@Entity
@Table(name = "\"user\"")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "is_admin")
	private Boolean isAdmin;

	public User() { }

	public Integer getId() { return id; }

	public void setId(Integer id) { this.id = id; }

	public String getName() { return name; }

	public void setName(String name) { this.name = name; }

	public String getEmail() { return email; }

	public void setEmail(String email) { this.email = email; }

	public void setPassword(String password) {	this.password = BCrypt.hashpw(password, BCrypt.gensalt());	}

	public String getPassword() {	return password;	}

	public Boolean getIsAdmin() { return isAdmin; }

	public void setIsAdmin(Boolean admin) { isAdmin = admin; }
}
