package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.*;


@Entity
public class candidat {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String prenom;
    private String email;
    private int id_annonce;


    public candidat(String nom, String prenom, String email, int id_annonce) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.id_annonce = id_annonce;
    }

    public candidat() {

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
