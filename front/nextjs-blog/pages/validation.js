import Link from 'next/link';

export default function validation() {

    function lien(){
        window.location.href = "/";
    }

    return (

        
         <><h1>Candidature envoyé</h1>
        <button onClick={lien}>Revenir à la recherche d'emploi</button></>
        
         

    )      

}