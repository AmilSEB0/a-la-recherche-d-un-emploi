package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class annonce {
    @javax.persistence.Id
    @javax.persistence.GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    private int id;


    private String nom_employeur;
    private String titre;
    private String ville;
    private String description;
    private String contrat;
    private int nombre_de_clic;
    private int nombre_de_candidats;

    @javax.persistence.OneToMany(cascade = {javax.persistence.CascadeType.ALL})
    @javax.persistence.JoinColumn(name = "id_candidat", referencedColumnName = "id")
    private int id_candidat;



    public annonce(String nom_employeur, String titre, String ville, String description,  String contrat, int nombre_de_clic,  int nombre_de_candidats){
        this.nom_employeur = nom_employeur;
        this.titre = titre;
        this.ville = ville;
        this.description = description;
        this.contrat = contrat;
        this.nombre_de_clic = nombre_de_clic;
        this.nombre_de_candidats = nombre_de_candidats;
    }

    public annonce() {

    }


    @Id
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom_employeur() {
        return nom_employeur;
    }

    public String getVille() {
        return ville;
    }

    public String getDescription() {
        return description;
    }

    public String getContrat() {
        return contrat;
    }

    public String getTitre() {
        return titre;
    }

    public int getNombre_de_clic() {
        return nombre_de_clic;
    }

    public int getNombre_de_candidats() {
        return nombre_de_candidats;
    }
}
