import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { db } from "../firebase.js";


export default function Result() {

  const [loadTitle, setLoadTitle] = useState([])
  // const [loadContent, setLoadContent] = useState()

  const history = useHistory();

  useEffect(()=>{

    
    db.collection('VoteContent').onSnapshot((snapshot)=>{
     setLoadTitle(snapshot.docs.map(doc => doc.data()))
    })

  }, [])



  function handleClick(e) {
    e.preventDefault()
    history.push("/")
  }

  return (
    <div>
      {loadTitle.map((val) => (
        <>
  
  <Form.Check type="radio" aria-label="radio 1"/>
  <span>{val.title}</span>
  <Form.Check type="radio" aria-label="radio 1"/>
  <span>{val.content}</span>
</>
      ))}
    </div>
    

)
}
