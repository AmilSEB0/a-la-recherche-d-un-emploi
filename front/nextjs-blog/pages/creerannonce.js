//import Link from 'next/link';

import { useState } from "react"

export default function creerannonce() {

    
        const [titre, setTitre] = useState('');
        const [nom_employeur, setNom_Employeur] = useState('');
        const [ville, setVille] = useState('');
        const [contrat, setContrat] = useState('');
        const [description, setDescription] = useState('');

        const Ajout = (e) => {
            e.preventDefault();
            const annonce = {titre, nom_employeur, ville, contrat, description}

            fetch('http://localhost:9090/annonce', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(annonce)
            }).then(() => {
                console.log("annonce ajouter");
            })
        }
        function lien(){
             window.location.href = "/validation";
        }


    return (

        
         <form onSubmit={Ajout}>
         <label>Titre*:</label>
         <input value={titre} onChange={(e) => setTitre(e.target.value)} type="text" placeholder="Ajouter un titre"/><br></br>
         <label for="last">Nom de l'entreprise*:</label>
         <input value={nom_employeur} onChange={(e) => setNom_Employeur(e.target.value)} type="text" placeholder="Entrez le nom de votre entreprise"/><br></br>
         <label>Ville*:</label>
         <input value={ville} onChange={(e) => setVille(e.target.value)} type="text" placeholder="Où se situe votre entreprise"/><br></br>
         <form>
         <label>Contrat*:</label>
        <select value={contrat} onChange={(e) => setContrat(e.target.value)} name="nom" size="1">
        <option value="">--Séléctionnez un contrat--</option>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Stage">Stage</option>
        <option value="Alternance">Alternance</option>
        <option value="Freelence">Freelence</option>
        </select>
        </form><br></br>
         <label for="last">Description*:</label>
         <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Décrivez votre entreprise" ></textarea><br></br>
         
         <input type="reset"></input><br></br>
        <input onClick={lien} type="submit" value="Envoyer"></input>
        
         </form>

    )      

}