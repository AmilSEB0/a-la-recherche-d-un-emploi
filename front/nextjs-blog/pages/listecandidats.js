import { useEffect, useState } from "react";
import Link from 'next/link';



export default function listecandidats() {

    const [ candidats, setcandidat] = useState([])

    const getListeCandidats = async () =>{
        const id = window.location.search.slice(1)
        const response = await fetch("http://localhost:9090/annonce/"+id)
        const data = await response.json()
        setcandidat(data.candidat)
        console.log(data.candidat)
    }
  
  
  useEffect(() => {
    getListeCandidats();
  }, [])

  return (
    
    

      <body>
        <div class="droite"><Link href="/">Voir les annonces</Link></div>

      <main>
          <h1>
              Voici la liste des candidats ayant postuler à cette offre
          </h1>
          <hr></hr>

          <div class="candidat">

          {
    candidats.map((annonce, key) => (
        <div key={key}>
             <p>{annonce.prenom} {annonce.nom}</p>
             <p>{annonce.email}</p>

        </div>
    ))
}

             </div>



      </main>

      <style >{`
.candidat {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.candidat div {
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
  position: fixed; 

}

body{
  background-color: #afeeee;
  background-size: cover;
}


      `}</style>


</body>
  )
  
}
