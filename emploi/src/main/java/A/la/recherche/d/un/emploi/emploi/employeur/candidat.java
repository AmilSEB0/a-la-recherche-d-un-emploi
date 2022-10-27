package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.*;


@Entity
public class candidat {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String nom;
    @Column
    private String prenom;
    @Column
    private String email;
    @Column
    private int id_annonce; 


    public candidat(String nom, String prenom, String email,int id_annonce) {
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
    public int getId_annonce() {
        return id_annonce;
    }

    public void setId_annonce(int id_annonce) {
        this.id_annonce = id_annonce;
    }
}
