export default  function Button({title, counter, setCounter}) {
    const inc = () => {
        setCounter( (prev) => prev + 1)
    }
    return (
        <>

            <button type="button" className="btn btn-primary"  onClick={inc} >{title}</button>
            {counter}
        </>
    )
}