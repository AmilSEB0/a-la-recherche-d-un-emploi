

export default function listecandidats() {


  return (
    
    

      <>
        <div class="droite"><Link href="/creerannonce">Créer une annonce</Link></div>

      <main>
          <h1 className="title">
              Bienvenue sur à la recherche d'un emploi
          </h1>

          <div class="constructeur">

              <div>
                  <p><u>Michel hd</u></p>
                  <p><u>nom de l'employeur:</u> 2</p>
                  <p><u>ville :</u> 2</p>
                  <p><u>description :</u> 2</p>
                  <p><u>nombre de cercle :</u> 2</p>
              </div>
              <div>
                  <p><u>nom :</u> Liste supra génialisime de la mort qui tue</p>
                  <p><u>nombre de carré :</u> 1</p>
                  <p><u>nombre de rectangle :</u> 2</p>
                  <p><u>nombre de triangle :</u> 0</p>
                  <p><u>nombre de cercle :</u> 0</p>

              </div>
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
      `}</style><style jsx global>{`
      
      `}</style></>
  )
  
}
