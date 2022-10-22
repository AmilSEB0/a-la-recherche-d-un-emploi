import {useRouter} from "next/router"


export default function validationannonce() {
    const router = useRouter();

  
    return (

        
         <><h1>Votre annonce à été créer avec succès</h1>
         <p>Attendez vous avoir une centaine de candidature dans les prochain jour</p>
        <button onClick={() => router.push("/")}>Revenir à la recherche d'un emploi</button>
        
        <style >{`

div {
  width: 50%;
  height:50%;
  border: solid black 2px;
  background-color: rgb(248, 246, 246);
  margin-left: 30%;
  margin-top: 10%;
}
h1{
  text-align: center;
  margin-bottom: 10%;
  text-decoration: underline;
  font-size: 250%
}
p{
  font-style: oblique;
  font-size: 150%
}
button{
    margin-left: 20%;
    margin-right: 20%;
    font-size: 200%;
    margin-top: 20%;

}
body {
    background: linear-gradient(blue, white);
    height:100vh;
}

      `}</style>
        </>
        
         

    )      

}