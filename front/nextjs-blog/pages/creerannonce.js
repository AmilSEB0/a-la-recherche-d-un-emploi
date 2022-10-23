//import Link from 'next/link';

import { useEffect, useState } from "react";

export default function creerannonce() {

        const [titre, setTitre] = useState('');
        const [nom_employeur, setNom_Employeur] = useState('');
        const [ville, setVille] = useState('');
        const [contrat, setContrat] = useState('');
        const [description, setDescription] = useState('');
        const date =  null


        const Ajout = (e) => {
            e.preventDefault();
            date =  new Date();
            const annonce = {titre, nom_employeur, ville, contrat, description, date}

            fetch('http://localhost:9090/annonce', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(annonce)
            }).then(() => {
              lien()
                console.log("annonce ajouter");
            })
        }
        function lien(){
             window.location.href = "/validationannonce";
        }
      const getAujourduhiu =() =>{

        let debut = new Date()
        

        const day = ('0' + debut.getUTCDate()).slice(-2);
        const month = debut.toLocaleDateString('fr-FR', {month: 'long'});
        const year = debut.getUTCFullYear();
        const hours = ('0' + debut.getUTCHours()).slice(-2);
        const minutes = ('0' + debut.getUTCMinutes()).slice(-2);
        const heure = hours + 2;
  
        const dateform = `${day} ${month} ${year} à ${heure}:${minutes}`;
        console.log(dateform)
  
      }
        useEffect(() => {
          console.log(getAujourduhiu());
          
        }, [])

    return (

         <form onSubmit={Ajout}>
                 

         <br></br>
         <label>Titre*:</label>
         <input value={titre} onChange={(e) => setTitre(e.target.value)} type="text" placeholder="Ajouter un titre"/><br></br>
         <label for="last">Nom de l'entreprise*:</label>
         <input value={nom_employeur} onChange={(e) => setNom_Employeur(e.target.value)} type="text" placeholder="Entrez le nom de votre entreprise"/><br></br>
         <label>Ville*:</label>
         <input value={ville} onChange={(e) => setVille(e.target.value)} type="text" placeholder="Où se situe votre entreprise"/><br></br>
         <form>
         <label>Contrat*:</label><br></br>
        <select value={contrat} onChange={(e) => setContrat(e.target.value)} name="nom" size="1">
        <option value="">--Séléctionnez un contrat--</option>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Stage">Stage</option>
        <option value="Alternance">Alternance</option>
        <option value="Freelence">Freelence</option>
        </select>
        </form><br></br>
         <label>Description*:</label>
         <textarea rows="15" cols="40" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Décrivez votre entreprise" ></textarea><br></br>
         
        <button class="bleu"  type="submit">Envoyer</button>

        
        <style>{`


 div {
    width: 90%;
    border: solid black 2px;
    background-color: rgb(248, 246, 246);
    margin-left: 2%;
    margin-right: 50%;
    margin-top: 2%;
    margin-bottom: 2%;
}
  form{
    text-align:center;
  }
  input, textarea{
    width: 99%;
    margin-bottom: 2%;

  }
  label, input, textarea, option, button{
    font-size:150%;
  }
  html{
    background-color: #afeeee;
    background-size: cover;

  }


      `}</style>
        
         </form>

    )      

}