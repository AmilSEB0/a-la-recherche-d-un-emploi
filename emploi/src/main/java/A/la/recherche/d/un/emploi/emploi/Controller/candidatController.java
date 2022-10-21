package A.la.recherche.d.un.emploi.emploi.Controller;

import A.la.recherche.d.un.emploi.emploi.dao.candidatsDao;

import org.springframework.web.bind.annotation.*;

import A.la.recherche.d.un.emploi.emploi.employeur.candidat;
import java.util.List;

@CrossOrigin()
@RestController
public class candidatController {
    public final candidatsDao candidatsDao;

    public candidatController(candidatsDao candidatsDao) {
        this.candidatsDao = candidatsDao;
    }


    @GetMapping("/candidat")
    public List<candidat> listedesannonce() { 
      return candidatsDao.findAll();
     }

     @GetMapping("/candidat/{id}")
     public candidat afficherUneAnnonce(@PathVariable int id){
         return candidatsDao.findById(id);
     }
 
     @DeleteMapping(value = "/candidat/{id}")
     public void deleteCandidat(@PathVariable int id){
        candidatsDao.deleteById(id);
     }
 
     @PostMapping(value = "/candidat")
     public candidat addCandidat(@RequestBody candidat candidat){
         return candidatsDao.save(candidat);
     }
    
}


