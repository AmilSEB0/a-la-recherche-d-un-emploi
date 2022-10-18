package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class candidat {
    private int id;
    private String nom;
    private String prenom;
    private String email;
    private int id_annonce;


    public candidat(String nom, String prenom, String email) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }

    public candidat() {

    }

    public String getNom(){
        return nom;
    }
    
    public String getPrenom(){
        return prenom;
    }

    public String getEmail(){
        return email;
    }


    public void setId(int id) {
        this.id = id;
    }

    @Id
    public int getId() {
        return id;
    }
}
