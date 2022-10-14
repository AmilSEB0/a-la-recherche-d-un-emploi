package A.la.recherche.d.un.emploi.emploi.Controller;

@org.springframework.web.bind.annotation.RestController
public class annonceController {
    public final A.la.recherche.d.un.emploi.emploi.dao.annonceDao annonceDao;

    public annonceController(A.la.recherche.d.un.emploi.emploi.dao.annonceDao annonceDao) {
        this.annonceDao = annonceDao;
    }
    @org.springframework.web.bind.annotation.GetMapping({"/annonce"})
    public void listedesannonce() { /* compiled code */ }
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