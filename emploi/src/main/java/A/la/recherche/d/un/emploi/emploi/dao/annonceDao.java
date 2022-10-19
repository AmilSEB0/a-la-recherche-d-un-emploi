package A.la.recherche.d.un.emploi.emploi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import A.la.recherche.d.un.emploi.emploi.employeur.annonce;
import org.springframework.stereotype.Repository;

@Repository
public interface annonceDao extends JpaRepository<annonce, Integer> {

    annonce findById(int id);

}
