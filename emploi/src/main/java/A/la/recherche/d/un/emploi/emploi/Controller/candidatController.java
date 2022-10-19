package A.la.recherche.d.un.emploi.emploi.Controller;

import A.la.recherche.d.un.emploi.emploi.dao.candidatsDao;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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
     public void deleteForm(@PathVariable int id){
        candidatsDao.deleteById(id);
     }
 
     @PostMapping(value = "/candidat")
     public candidat addList(@RequestBody candidat candidat){
         return candidatsDao.save(candidat);
     }
    
}


