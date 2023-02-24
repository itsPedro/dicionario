const Meaning = ({ mean }) => {
    
    return (

        <div>

            {mean.map((res) => (
                <h1>{res.meanings}</h1>
            ))}

        </div>
    )
}

export default Meaning;