import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Home() {


const [ annonces, setAnnonces] = useState([])
  const getAnnonces = async () =>{
    const response = await fetch("http://localhost:9090/annonce")
    const data = await response.json()
    setAnnonces(data)
  }

  function lien(id){
    // window.location.href = "/postuler?"+id;
    console.log("1");
}
useEffect(() => {
  getAnnonces();
}, [])




  return (
    <div className="container">
      <Head>
        <title>à la recherche d'un emploi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div class="droite"><Link href="/creerannonce">Créer une annonce</Link></div>

      <main>
        <h1 className="title">
          Bienvenue sur à la recherche d'un emploi
        </h1>

        <div class="constructeur">

        {
        annonces.map(annonce => {
          return(
            <div key={annonce.id}>
              <h1><u>{annonce.titre}</u></h1>
              <p><u>nom de l'employeur:</u> {annonce.nom_employeur}</p>
              <div class="encadrer">{annonce.contrat}</div>
              <p><u>ville :</u> {annonce.ville}</p>
              <div onClick= {lien(annonce.id)}><button>Voir l'offre</button></div>
              {/* <button >Voir l'offre</button> */}
            </div>
          )
        })
      }

          {/* <div> 
              <h1><u>Developpeur Full Stack</u></h1>
              <p><u>nom de l'employeur:</u> </p>
              <div class="encadrer">CDI</div>
              <p><u>ville :</u> 2</p>
              <span id="d2">
              <p><u>description :</u> 2</p>
              <p><u>nombre de cercle :</u> 2</p>
              <button onClick={lien}>Postulez</button>
              </span>
              <a onClick={togg}>lire la suite</a>


          </div>
          <div> 
          <h1><u>Developpeur Back</u></h1>
              <p><u>nom de l'employeur:</u> </p>
              <div class="encadrer">CDI</div>
              <p><u>ville :</u> 2</p>
              <span id="d1">
              <p><u>description :</u> 2</p>
              <p><u>nombre de cercle :</u> 2</p>
              <button onClick={lien}>Postulez</button>
              </span>
              <a onClick={togg}>lire la suite</a>

          </div>*/}
        </div> 
        

      
      </main>

      

      <style >{`
     .constructeur {
      justify-content: center;
      flex-wrap: wrap;
  }
  
  .constructeur div {
      width: 20%;
      border: solid black 2px;
      background-color: rgb(248, 246, 246);
      /* margin-left: 10%; */
      margin-right: 90%;
      margin-top: 1%;
      margin-bottom: 2%;
  }
  .droite{
    text-align: right;
  }
  .encadrer{
    border: 1px;
    solid black; 
  }
  p{
    align-text: center;
  }
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  )
}
