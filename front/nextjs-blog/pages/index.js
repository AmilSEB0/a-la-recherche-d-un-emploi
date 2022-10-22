import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";
import {useRouter} from "next/router"


export default function Home() {

  const router = useRouter();

const [ annonces, setAnnonces] = useState([])
  const getAnnonces = async () =>{
    const response = await fetch("http://localhost:9090/annonce")
    const data = await response.json()
    setAnnonces(data)
  }


useEffect(() => {
  getAnnonces();
}, [])




  return (
    <div class="container">
      <div class="titre">
      <Head>
        <title>à la recherche d'un emploi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div class="droite"><Link href="/creerannonce">Créer une annonce</Link></div>
      <h1 >
          Bienvenue sur à la recherche d'un emploi
        </h1>
        </div>
      <main>
      

        <div class="constructeur">

        {
        annonces.map(annonce => {
          return(
            <div key={annonce.id}>
              <h1><u>{annonce.titre}</u></h1>
              <p><u>entreprise:</u> {annonce.nom_employeur}</p>
              <p><u>ville :</u> {annonce.ville}</p>
              <p class="encadrer">{annonce.contrat}</p>
              <p><button onClick={() => router.push("/postuler?"+ annonce.id)}>Voir l'offre</button></p>

            </div>
          )
        })
      }

        </div> 
        

      
      </main>

      

      <style >{`
.constructeur {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.constructeur div {
  width: 30%;
  border: solid black 2px;
  background-color: rgb(248, 246, 246);
  /* margin-left: 10%; */
  margin-right: 10%;
  margin-top: 1%;
  margin-bottom: 2%;
}
.droite{
  text-align: right;
}
.encadrer{
  border:1px solid black;
}
p{
  text-align: center;
}
h1{
  text-align: center;
}
.titre{
  background-color: #00bfff;
}
.container{
  background-color: #afeeee;
  height:1000vh;
}

      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  )
}
