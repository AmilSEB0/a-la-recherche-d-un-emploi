import Link from 'next/link';

export default function creerannonce() {

    

    return (
        <form action="/send-data-here" method="post">
        <label for="first">First name:</label>
        <input type="text" />
        <label for="last">Last name:</label>
        <input type="text"/>
        <Link href="/"><button>Submit</button></Link>
        
        </form>

    )      

}