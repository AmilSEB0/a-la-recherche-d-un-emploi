import { useEffect, useState } from "react";
import Link from 'next/link';



export default function listecandidats() {

    const [ annonces, setAnnonces] = useState([])

    const getUnAnnonce = async () =>{
      const id = window.location.search.slice(1)
      const response = await fetch("http://localhost:9090/annonce/")
      const data = await response.json()
      setAnnonces(data)
      console.log(data.candidat)
    }
  
    function lien(id){
      // window.location.href = "/postuler?"+id;
      console.log("1");
  }
  useEffect(() => {
    getUnAnnonce();
  }, [])

  return (
    
    

      <>
        <div class="droite"><Link href="/index.js">Voir les annonces</Link></div>

      <main>
          <h1 className="title">
              Bienvenue sur à la recherche d'un emploi
          </h1>

          <div class="constructeur">

          {
        annonces.map(annonce => {
          return(
            <div key={annonce.id}>
              <h1><u>{annonce.nom}</u></h1>
              {/* <p><u>nom de l'employeur:</u> {annonce.nom_employeur}</p>
              <div class="encadrer">{annonce.contrat}</div>
              <p><u>ville :</u> {annonce.ville}</p>
              <div onClick= {lien(annonce.id)}><button>Voir l'offre</button></div> */}
              {/* <button >Voir l'offre</button> */}
            </div>
          )
        })
      }

              <div>
                  <p><u>Michel hd</u></p>
                  <p><u>nom de l'employeur:</u> 2</p>
                  <p><u>ville :</u> 2</p>
                  <p><u>description :</u> 2</p>
                  <p><u>nombre de cercle :</u> 2</p>
              </div>
              <div>
                  <p><u>nom :</u> Liste supra génialisime de la mort qui tue</p>
                  <p><u>nombre de carré :</u> 1</p>
                  <p><u>nombre de rectangle :</u> 2</p>
                  <p><u>nombre de triangle :</u> 0</p>
                  <p><u>nombre de cercle :</u> 0</p>

              </div>
          </div>



      </main><style>{`
     .constructeur {
      justify-content: center;
      flex-wrap: wrap;
  }
  
  .constructeur div {
      width: 30%;
      border: solid black 2px;
      background-color: rgb(248, 246, 246);
      /* margin-left: 10%; */
      margin-right: 90%;
      margin-top: 1%;
      margin-bottom: 2%;
  }
      `}</style><style jsx global>{`
      
      `}</style></>
  )
  
}
