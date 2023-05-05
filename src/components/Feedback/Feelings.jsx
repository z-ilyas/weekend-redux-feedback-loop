function Feelings() {

    return (
        <div className="feelings">
            <h1>How are you Feeling today?</h1>
            <p>Feeling?</p>
            <input
                type="number"
                value={feelings}
                onChange={ (event) => {setfeelings(event.target.value)}}
            />
            <button>NEXT</button>
        </div>
    )
}

export default Feelings;