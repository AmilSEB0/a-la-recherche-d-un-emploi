//import Link from 'next/link';

export default function postuler() {

    

    return (

        
         <form action="/validation" method="post">
         <label>Nom*:</label>
         <input type="text" placeholder="Quelle est votre nom de famille"/><br></br>
         <label for="last">Prénom*:</label>
         <input type="text" placeholder="Quelle est votre nom de famille"/><br></br>
         <label>Email*:</label>
         <input type="email" placeholder="Entrez votre email"/><br></br>
         <label>Cv*:</label>
         <input type="file" /><br></br>
         
         
         <input type="reset"></input><br></br>
        <input type="submit" value="Déposer ma candidature"></input>
        
         </form>

    )      

}