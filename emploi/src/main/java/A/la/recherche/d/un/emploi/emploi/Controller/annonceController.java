package A.la.recherche.d.un.emploi.emploi.Controller;

import A.la.recherche.d.un.emploi.emploi.dao.annonceDao;
//import A.la.recherche.d.un.emploi.emploi.dao.annonceDTO;
import A.la.recherche.d.un.emploi.emploi.employeur.annonce;
import java.util.List;

import org.springframework.web.bind.annotation.*;


@CrossOrigin()
@RestController
public class annonceController {
    public final annonceDao annonceDao;

    public annonceController(annonceDao annonceDao) {
        this.annonceDao = annonceDao;
    }


    @GetMapping("/annonce")
    public List<annonce> listedesannonce() { 
      return annonceDao.findAll();
     }

     @GetMapping("/annonce/{id}")
     public annonce afficherUneAnnonce(@PathVariable int id){
         return annonceDao.findById(id);
     }
 
     @DeleteMapping(value = "/annonce/{id}")
     public void deleteAnnonce(@PathVariable int id){
         annonceDao.deleteById(id);
     }
 
    //  @PostMapping(value = "/annonce")
    //  public  void  ajoutAnnonce( @RequestBody annonceDTO annonce){
    //      annonce annonce2 = annonceDTO.ajoutAnnonce(annonce);
    //      annonceDao.saveAndFlush(annonce2);
    //  }

    @PostMapping(value = "/annonce")
    public annonce addAnnonce(@RequestBody annonce annonce){
        return annonceDao.save(annonce);
    }
 
    @PutMapping(value = "/annonce/{id}")
    public void updateForme(@PathVariable int nombre_de_clic, @RequestBody annonce annonce) {
        annonce.setNombre_de_clic(nombre_de_clic);
        annonceDao.save(annonce);
    }

 
}



//    public void afterPropertiesSet() throws java.lang.Exception { /* compiled code */ }

//    public FormController(api.api.dao.Formdao formDao) { /* compiled code */ }

  //  @org.springframework.web.bind.annotation.GetMapping({"/formes"})
    //public java.util.List<api.api.form.Form> listDeToutLesFormes() { /* compiled code */ }

 //   @org.springframework.web.bind.annotation.GetMapping({"/formes/{id}"})
   // public api.api.form.Form AfficherUneForme(@org.springframework.web.bind.annotation.PathVariable int id) { /* compiled code */ }

    //@org.springframework.web.bind.annotation.DeleteMapping({"/formes/{id}"})
    //public void deleteForm(@org.springframework.web.bind.annotation.PathVariable int id) { /* compiled code */ }

  //  @org.springframework.web.bind.annotation.PostMapping({"/formes"})
   // public void addForm(@org.springframework.web.bind.annotation.RequestBody api.api.dao.FormDTO form) { /* compiled code */ }
//}