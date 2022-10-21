//import Link from 'next/link';
import axios from "axios";    
import { useState, useEffect } from "react"
import {useRouter} from "next/router"
// import { useParams } from "react-router-dom";

export default function postuler() {
  const router = useRouter();
    
    const [ annonces, setAnnonces] = useState([])

    const getUnAnnonce = async () =>{
      const id = window.location.search.slice(1)
      const response = await fetch("http://localhost:9090/annonce/"+id)
      const data = await response.json()
      setAnnonces([data])
      console.log(data)
    }

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const id_annonce =  null


    const Ajout = (e) => {
      const id = window.location.search.slice(1)

        e.preventDefault();
        id_annonce =  id
        const candidat = {nom, prenom, email, id_annonce}
        

        fetch('http://localhost:9090/candidat', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(candidat)
        }).then(() => {
            console.log("annonce ajouter");
        })
    }


  
    function lien(){
      const id = window.location.search.slice(1)

     window.location.href = "/listecandidats?"+id;
  }
  useEffect(() => {
    getUnAnnonce();
  }, [])


    return (

      <div class="constructeur">
        {
    annonces.map((annonce, key) => (
        <div key={key}>
             <h1><u>{annonce.titre}</u></h1>
              <p><u>Nom de l'entreprise:</u> {annonce.nom_employeur}</p>
              <div class="encadrer">{annonce.contrat}</div>
              <p><u>Ville :</u> {annonce.ville}</p>
              <p><u>Description :</u> {annonce.description}</p>
              <p><u>Nombre de candidat ayant postuler à cette annonce :</u> {annonce.nombre_de_candidats}</p>
              <button onClick={() => router.push("/listecandidats?"+ annonce.id)}>Voir les candidat qui ont postuler à cette annonce</button>
        </div>
    ))
}


      <form action="/validation" onSubmit={Ajout}>
          <label>Nom*:</label>
          <input value={nom} onChange={(e) => setNom(e.target.value)}  type="text" placeholder="Quelle est votre nom de famille" /><br></br>
          <label>Prénom*:</label>
          <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" placeholder="Quelle est votre prénom" /><br></br>
          <label>Email*:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Entrez votre email" /><br></br>
          <label>Cv*:</label>
          <input type="file" /><br></br>


          <input type="reset"></input><br></br>
          <input type="submit" value="Déposer ma candidature"></input>

        </form>
        </div>
         
    )     

}






// function App() {
//   const [annonce, setAnnonce] = useState(null);

//   const getUnAnnonce = async () => {
//     const id = window.location.search.slice(1);
//     const response = await fetch('http://localhost:9090/annonce/' + id);
//     const data = await response.json();
//     setAnnonce(data);
//     console.log(data);
//     // axios
//     // .get('http://localhost:9090/annonce/'+id)
//     // .then(res => {
//     //   console.log(res.data[0])
//     //   setAnnonces(res.data)
//     // })
//     // .catch(err => {
//     //   console.log(err)
//     // })
//   };

//   function lien(id) {
//     // window.location.href = "/postuler?"+id;
//     console.log('1');
//   }
//   useEffect(() => {
//     getUnAnnonce();
//   }, []);

//   if (!annonce) {
//     return <div>chargement...</div>;
//   }

//   return (
//     <div class="constructeur">
//       <div key={annonce.id}>
//         <h1>
//           <u>{annonce.titre}</u>
//         </h1>
//         <p>
//           <u>nom de l'employeur:</u> {annonce.nom_employeur}
//         </p>
//         <div class="encadrer">{annonce.contrat}</div>
//         <p>
//           <u>ville :</u> {annonce.ville}
//         </p>
//         <div onClick={lien(annonce.id)}>
//           <button>Voir l'offre</button>
//         </div>
//         {/* <button >Voir l'offre</button> */}
//       </div>
//     </div>
//     /* </div><form action="/validation" method="post">
//               <label>Nom*:</label>
//               <input type="text" placeholder="Quelle est votre nom de famille" /><br></br>
//               <label for="last">Prénom*:</label>
//               <input type="text" placeholder="Quelle est votre nom de famille" /><br></br>
//               <label>Email*:</label>
//               <input type="email" placeholder="Entrez votre email" /><br></br>
//               <label>Cv*:</label>
//               <input type="file" /><br></br>
    
    
//               <input type="reset"></input><br></br>
//               <input type="submit" value="Déposer ma candidature"></input>
    
//             </form></> */
//   );
// }