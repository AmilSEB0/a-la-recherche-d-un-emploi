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
    
    

      <>
        <div class="droite"><Link href="/index.js">Voir les candidat</Link></div>

      <main>
          <h1 className="title">
              Voici la liste des candidats ayant postuler à cette offre
          </h1>

          <div class="constructeur">

          {
    candidats.map((annonce, key) => (
        <div key={key}>
             <p>{annonce.nom} {annonce.nom}</p>
             <p>{annonce.email}</p>

        </div>
    ))
}

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
  p{
    text-align:center;
  }
      `}</style><style jsx global>{`
      
      `}</style></>
  )
  
}
