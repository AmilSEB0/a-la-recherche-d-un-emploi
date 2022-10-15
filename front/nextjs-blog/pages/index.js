import Head from 'next/head';
import Link from 'next/link';


export default function Home() {

  function togg(){
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  };


  function lien(){
    window.location.href = "/postuler";
}




  return (
    <div className="container">
      <Head>
        <title>à la recherche d'un emploi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="droite"><Link href="/creerannonce">Créer une annonce</Link></div>

      <main>
        <h1 className="title">
          Bienvenue sur à la recherche d'un emploi
        </h1>

        <div class="constructeur">

          <div> 
              <h1><u>Developpeur Full Stack</u></h1>
              <p><u>nom de l'employeur:</u> </p>
              <div class="encadrer">CDI</div>
              <p><u>ville :</u> 2</p>
              <span id="d2">
              <p><u>description :</u> 2</p>
              <p><u>nombre de cercle :</u> 2</p>
              <button onClick={lien}>Postulez</button>
              </span>
              <a onClick={togg}>lire la suite</a>


          </div>
          <div> 
          <h1><u>Developpeur Back</u></h1>
              <p><u>nom de l'employeur:</u> </p>
              <div class="encadrer">CDI</div>
              <p><u>ville :</u> 2</p>
              <span id="d1">
              <p><u>description :</u> 2</p>
              <p><u>nombre de cercle :</u> 2</p>
              <button onClick={lien}>Postulez</button>
              </span>
              <a onClick={togg}>lire la suite</a>

          </div>
        </div>
        

      
      </main>

      

      <style >{`
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
  .droite{
    text-align: right;
  }
  .encadrer{
    border: 1px;
    solid black; 
  }
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  )
}
