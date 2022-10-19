package A.la.recherche.d.un.emploi.emploi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import A.la.recherche.d.un.emploi.emploi.dao.annonceDao;
// import A.la.recherche.d.un.emploi.emploi.dao.candidatsDao;


@SpringBootApplication
public class EmploiApplication {


	// public final annonceDao annoncedao;
	// public final candidatsDao candidatsDao;

	// public EmploiApplication(annonceDao annoncedao, candidatsDao candidatsDao) {
	// 	this.annoncedao = annoncedao;
	// 	this.candidatsDao = candidatsDao;
	// }


	public static void main(String[] args) {
		SpringApplication.run(EmploiApplication.class, args);
	}

}
