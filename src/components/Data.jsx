
import'./multiple.css'

export const Data =({Students}) =>{
    const student =[];
    Students.forEach(e =>{
        student.push(
            <div className='card'>
                <img src={e.url} alt="" className="profile"/>
                <h2>{e.name}</h2>
                <h2>{e.course}</h2>
                <p>{e.description}</p>
                <div className="buttons">
                    <a href={e.linkedin}>Linkedin</a>
                    <a href={e.github}>Github</a>
                </div>
            </div>
        )
    })
 return(
        <>
        <div className='cards'>{student}</div>
        </>
    )
}