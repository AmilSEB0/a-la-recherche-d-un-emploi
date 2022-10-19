package A.la.recherche.d.un.emploi.emploi.employeur;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.ArrayList;



@Entity
public class annonce {

    @Id
    @GeneratedValue
    private int id;
    // @OneToMany(cascade = {CascadeType.ALL})
    // @javax.persistence.JoinColumn(name = "id_annonce", referencedColumnName = "id")
  //  private List<candidat> candidat = new ArrayList<>();


    private String nom_employeur;
    private String titre;
    private String ville;
    private String description;
    private String contrat;
    private int nombre_de_clic;
    private int nombre_de_candidats;

    
    



    public annonce(String nom_employeur, String titre, String ville, String description,  String contrat, int nombre_de_clic,  int nombre_de_candidats, List<candidat> candidat){
        this.nom_employeur = nom_employeur;
        this.titre = titre;
        this.ville = ville;
        this.description = description;
        this.contrat = contrat;
        this.nombre_de_clic = nombre_de_clic;
        this.nombre_de_candidats = nombre_de_candidats;
        //this.candidat = candidat;
    }

    public annonce() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom_employeur() {
        return nom_employeur;
    }

    public void setNom_employeur(String nom_employeur) {
        this.nom_employeur = nom_employeur;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContrat() {
        return contrat;
    }

    public void setContrat(String contrat) {
        this.contrat = contrat;
    }

    public int getNombre_de_clic() {
        return nombre_de_clic;
    }

    public void setNombre_de_clic(int nombre_de_clic) {
        this.nombre_de_clic = nombre_de_clic;
    }

    public int getNombre_de_candidats() {
        return nombre_de_candidats;
    }

    public void setNombre_de_candidats(int nombre_de_candidats) {
        this.nombre_de_candidats = nombre_de_candidats;
    }
}
