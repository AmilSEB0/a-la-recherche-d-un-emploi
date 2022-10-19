package A.la.recherche.d.un.emploi.emploi.dao;

import org.springframework.stereotype.Repository;

import A.la.recherche.d.un.emploi.emploi.employeur.candidat;
import org.springframework.data.jpa.repository.JpaRepository;

//@Repository
public interface candidatsDao extends JpaRepository<candidat, Integer> {
    candidat findById(int id);
}
