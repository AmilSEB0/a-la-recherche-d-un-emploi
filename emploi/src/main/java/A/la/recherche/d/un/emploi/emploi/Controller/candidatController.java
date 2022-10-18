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



// package A.la.recherche.d.un.emploi.emploi.Controller;

// import A.la.recherche.d.un.emploi.emploi.dao.annonceDTO;
// import A.la.recherche.d.un.emploi.emploi.employeur.annonce;
// import java.util.List;

// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;


//     @GetMapping("/annonce")
//     public List<annonce> listedesannonce() { 
//       return annonceDao.findAll();
//      }

//      @GetMapping("/annonce/{id}")
//      public annonce afficherUneAnnonce(@PathVariable int id){
//          return annonceDao.findById(id);
//      }
 
//      @DeleteMapping(value = "/annonce/{id}")
//      public void deleteForm(@PathVariable int id){
//          annonceDao.deleteById(id);
//      }
 
//      @PostMapping(value = "/annonce")
//      public  void  ajoutAnnonce( @RequestBody annonceDTO annonce){
//          annonce annonce2 = annonceDTO.ajoutAnnonce(annonce);
//          annonceDao.saveAndFlush(annonce2);
//      }
 
 
 
// }



// //    public void afterPropertiesSet() throws java.lang.Exception { /* compiled code */ }

// //    public FormController(api.api.dao.Formdao formDao) { /* compiled code */ }

//   //  @org.springframework.web.bind.annotation.GetMapping({"/formes"})
//     //public java.util.List<api.api.form.Form> listDeToutLesFormes() { /* compiled code */ }

//  //   @org.springframework.web.bind.annotation.GetMapping({"/formes/{id}"})
//    // public api.api.form.Form AfficherUneForme(@org.springframework.web.bind.annotation.PathVariable int id) { /* compiled code */ }

//     //@org.springframework.web.bind.annotation.DeleteMapping({"/formes/{id}"})
//     //public void deleteForm(@org.springframework.web.bind.annotation.PathVariable int id) { /* compiled code */ }

//   //  @org.springframework.web.bind.annotation.PostMapping({"/formes"})
//    // public void addForm(@org.springframework.web.bind.annotation.RequestBody api.api.dao.FormDTO form) { /* compiled code */ }
// //}