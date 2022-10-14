package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class candidat {
    private int id;
    private String nom;
    private String prenom;
    private String email;


    public candidat(String nom, String prenom, String email) {
    }

    public candidat() {

    }


    public void setId(int id) {
        this.id = id;
    }

    @Id
    public int getId() {
        return id;
    }
}
