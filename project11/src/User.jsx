
function User(props){
    return(
        <div>
            <h1>{props.data.name}</h1>
            <h2>{props.data.city}</h2>
            <h3>Skills:</h3>
            <ul>
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default User;