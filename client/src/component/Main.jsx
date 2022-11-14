import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {

    const navigate = useNavigate();
    const [ authors, setAuthors ] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/home")
            .then(res=>{
                console.log(res.data)
                setAuthors(res.data)
            })       
            .catch(err => {
                console.log(err)
            }) 
    }, []);

    const goToUpdate = (authorsMongoID) => {
        console.log(authorsMongoID)
        navigate(`/${authorsMongoID}`)
    }

    const deleteAuthor = (deleteID) => {
        axios.delete(`http://localhost:8000/delete/${deleteID}`)
            .then(res => {
                console.log("Delete Success", res.data)
                setAuthors(authors.filter((oneAuthor) => oneAuthor._id !== deleteID)) 
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <p><Link to={"/new"}>Add an Author</Link></p>
        <p>We have quotes from: </p>
        <table>
        <div>
            {
                authors.map((eachOneAuthor, i) => {
                    return (
                        <div key={eachOneAuthor._id}>
                            <Link to={`/pm/${eachOneAuthor._id}`}>
                                <h2>{eachOneAuthor.author}</h2>
                            </Link>
                            <button onClick={() => goToUpdate(eachOneAuthor._id)}>Edit</button>
                            <button onClick={() => deleteAuthor(eachOneAuthor._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        </table>
    </div>
  )
}

export default Main