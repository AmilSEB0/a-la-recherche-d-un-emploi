//import Link from 'next/link';

export default function creerannonce() {

    

    return (

        
         <form action="/" method="post">
         <label>Titre*:</label>
         <input type="text" placeholder="Ajouter un titre"/><br></br>
         <label for="last">Nom de l'entreprise*:</label>
         <input type="text" placeholder="Entrez le nom de votre entreprise"/><br></br>
         <label>Ville*:</label>
         <input type="text" placeholder="Où se situe votre entreprise"/><br></br>
         <form>
         <label>Contrat*:</label>
        <select name="nom" size="1">
        <option>Cdi</option>
        <option>CDD</option>
        <option>Stage</option>
        <option>Alternance</option>
        <option>Freelence</option>
        </select>
        </form><br></br>
         <label for="last">Description*:</label>
         <textarea placeholder="Décrivez votre entreprise" ></textarea><br></br>
         
         <input type="reset"></input><br></br>
        <input type="submit" value="Envoyer"></input>
        
         </form>

    )      

}