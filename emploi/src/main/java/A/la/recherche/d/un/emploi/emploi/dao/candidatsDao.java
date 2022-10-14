package A.la.recherche.d.un.emploi.emploi.dao;

import A.la.recherche.d.un.emploi.emploi.employeur.annonce;

@org.springframework.stereotype.Repository
public class candidatsDao extends annonce {
    int findById(int id) {
        return id;
    }
}
