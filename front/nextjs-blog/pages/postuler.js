//import Link from 'next/link';
import axios from "axios";    
import { useState, useEffect } from "react"
import {useRouter} from "next/router"
import ville from "../assets/icon-ville.png"
import contrat from "../assets/icon-contrat.png"
import Image from "next/image"
import logo from "../public/favicon.ico"
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


  
  useEffect(() => {
    getUnAnnonce();
  }, [])


    return (

      <body>
        {
    annonces.map((annonce, key) => (
        <><div key={key}>
          <div class="en-tete" >
            <Image width='50%' height='50%' src={logo} onClick={() => router.push("/")}/>
          <p>{annonce.nom_employeur}</p>
        <h1>{annonce.titre}</h1>
        <p><Image width='30%' height='30%' src={ville} class="img"/>{annonce.ville}    &ensp;&ensp; <Image width='30%' height='30%' src={contrat} class="img"/>{annonce.contrat}</p>
        </div>
        <p> {annonce.description}</p>
        <p><u>Nombre de candidat ayant postuler à cette annonce :</u> {annonce.nombre_de_candidats}</p>
        <button onClick={() => router.push("/listecandidats?" + annonce.id)}>Voir les candidat qui ont postuler à cette annonce</button>
      </div>
      
      <div class="formulaire" id="bas">
          <h2> Le poste de {annonce.titre} vous intéresse ? <br></br>Postulez dès maintenant</h2>
          <form action="/validation" onSubmit={Ajout}>
            <label>Nom*:</label>
            <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" placeholder="Quelle est votre nom de famille" /><br></br>
            <label>Prénom*:</label>
            <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" placeholder="Quelle est votre prénom" /><br></br>
            <label>Email*:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Entrez votre email" /><br></br>
            <label>Cv*:</label>
            <input type="file" /><br></br>


            <input type="submit" value="Déposer ma candidature"></input>

          </form>
        </div></>
  ))
}
        <style>{`


.formulaire div {
   width: 100%;
   border: solid black 2px;
   /* margin-left: 10%; */
   margin-right: 50%;
   margin-top: 1%;
   margin-bottom: 2%;
}
 form{
   text-align:center;
 }
  input, textarea{
   width: 100%;
   margin-bottom: 2%;
 }
 label, input, textarea, option, button{
   font-size:110%;
 }
 .formulaire{
  background-color: silver;
 }
 h2{
  text-align: center;
 }
 .en-tete p,h1{
  text-align:center;
 }
 .en-tete{
  margin-bottom:5%;
  background-color: #00bfff;
 }
 p {
  font-size: 110%;
  font-color: black;
 }
 body{
    background-color: #DCDCDC;
    background-size: cover;
 }


     `}</style>

        </body>
         
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