export default function Form(){

    return (

    <form className="newPost">
        <h2>Compose Twoot</h2>
        <textarea name="twoot" rows="3" placeholder="What are you humming about?"></textarea>
        <button type="submit">Twoot</button>
        <div  className="letterCount">count</div>
    </form>
    
    )

}
