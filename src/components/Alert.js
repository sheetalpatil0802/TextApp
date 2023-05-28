import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <b>{capitalize(props.alert.type)}</b>: {props.alert.msg}
        
    </div>
  )
}
