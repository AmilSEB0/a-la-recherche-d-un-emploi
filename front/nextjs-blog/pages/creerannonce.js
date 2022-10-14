import Script from 'next/script'

export default function creerannonce() {
    return (
        <form action="/send-data-here" method="post">
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
        </form>

    )
}