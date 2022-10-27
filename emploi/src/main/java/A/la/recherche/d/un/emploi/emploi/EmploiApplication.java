package A.la.recherche.d.un.emploi.emploi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import A.la.recherche.d.un.emploi.emploi.dao.annonceDao;
import A.la.recherche.d.un.emploi.emploi.dao.candidatsDao;
import A.la.recherche.d.un.emploi.emploi.employeur.annonce;
import A.la.recherche.d.un.emploi.emploi.employeur.candidat;

import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;



@SpringBootApplication
public class EmploiApplication {


	public final annonceDao annoncedao;
	public final candidatsDao candidatsDao;

	public EmploiApplication(annonceDao annoncedao, candidatsDao candidatsDao) {
		this.annoncedao = annoncedao;
		this.candidatsDao = candidatsDao;
	}


	public static void main(String[] args) {
		SpringApplication.run(EmploiApplication.class, args);
	}
	@Bean
	public CommandLineRunner initData(annonceDao annoncedao, candidatsDao candidatsdao) {
		return (args) -> {
			// Candidats
			candidat Jean = new candidat("Jacques","Jean","jean@jacques.fr",1);
			candidat Cerise = new candidat("Josseaume","Cerise","cerise@josseaume.fr",1);
			candidat Alexandre = new candidat("St-Jean","Alexandre","alexandre@st-jean.fr",1);
			candidat Édouard = new candidat("Huard","Édouard","edouard@huard.fr",2);
			candidat Camille = new candidat("Trudeau","Camille","camille@trudeau.fr",2);
			candidat Orva = new candidat("Meilleur","Orva","ovra@meilleur.fr",3);

			

			// Annonce 1
			ArrayList<candidat> liste1 = new ArrayList<>();
			liste1.add(Jean);
			liste1.add(Cerise);
			liste1.add(Alexandre);
			
		
			annonce annonce1 = new annonce("Entreprise A", "Développeur Full Stack", "France", "On vous a déjà dit que vous êtes exceptionnel dans ce que vous faites ?	Nous sommes à la recherche d'une personne courageuse et talentueuse comme vous pour accompagner notre ambition d'être la meilleure solution du marché.			Nous voulons que vous apportiez votre savoir-faire et votre expérience uniques pour que vous puissiez atteindre votre plein potentiel au sein de Entreprise A.", "CDI", 0,liste1 );
			annoncedao.save(annonce1);


			//Annonce 2
			ArrayList<candidat> liste2 = new ArrayList<>();
			liste2.add(Édouard);
			liste2.add(Camille);


			annonce annonce2 = new annonce("Entreprise B", "Développeur Back End", "France", "Aimeriez-vous un rôle qui peut vraiment faire ressortir votre créativité ? Nous sommes à la recherche d'une personne spéciale pour se joindre à notre équipe et apporter cette touche d'innovation. Comme nous réalisons quelque chose que personne n'a jamais fait auparavant, nous avons besoin d'aide pour une multitude de sujets.", "Stage", 0,liste2);
			annoncedao.save(annonce2);

			// Annonce 3
			ArrayList<candidat> liste3 = new ArrayList<>();
			liste2.add(Orva);


			annonce annonce3 = new annonce("Entreprise C", "Développeur Front End", "France", "Vous vivez et respirez votre travail ? Si c'est le cas, nous sommes à la recherche d'un Développeur Full Stack de génie. Comme une équipe d'aventuriers se forgeant leur chemin vers un nouveau continent, nous nous frayons un chemin vers l'inconnu... Il ne serait pas trop exagéré de dire que nous révolutionnons le marché avec notre solution innovatrice et pratique. Nous sommes à la recherche d'un visage frais pour rejoindre notre équipe en pleine croissance. Vous aurez besoin d'être un expert avec une solide connaissance en JavaScript et un vif intérêt pour Python.", "CDI", 0,liste3);

			annoncedao.save(annonce3);			
		};
	}
}
