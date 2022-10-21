//import Link from 'next/link';
import axios from "axios";    
import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom";

export default function postuler() {
    // function getUnAnnonce() {
    //   const id = window.location.search.slice(1)
    //   const data = axios.get('http://localhost:9090/annonce/'+id)
    //   console.log(data)
    //   return{
    //     props: {
    //       data: data || {},
    //     }
    //   }
    // }
    const [ annonces, setAnnonces] = useState([])

    const getUnAnnonce = async () =>{
      const id = window.location.search.slice(1)
      const response = await fetch("http://localhost:9090/annonce/"+id)
      const data = await response.json()
      setAnnonces([data])
      console.log(data)
      // axios
      // .get('http://localhost:9090/annonce/'+id)
      // .then(res => {
      //   console.log(res.data[0])
      //   setAnnonces(res.data)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  
    function lien(id){
      // window.location.href = "/postuler?"+id;
      console.log("1");
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
              <p><u>nom de l'employeur:</u> {annonce.nom_employeur}</p>
              <div class="encadrer">{annonce.contrat}</div>
              <p><u>ville :</u> {annonce.ville}</p>
              <div onClick={lien(annonce.id)}><button>Voir l'offre</button></div>
        </div>
    ))
}


      <form action="/validation" method="post">
          <label>Nom*:</label>
          <input type="text" placeholder="Quelle est votre nom de famille" /><br></br>
          <label for="last">Prénom*:</label>
          <input type="text" placeholder="Quelle est votre nom de famille" /><br></br>
          <label>Email*:</label>
          <input type="email" placeholder="Entrez votre email" /><br></br>
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