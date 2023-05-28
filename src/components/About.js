import React from 'react'

export default function About(props) {

  /* const [style, setStyle]=useState({
    color: 'black',
    backgroundColor: 'white'
  });
 */
  /* const [btn, setbtn]=useState('Enable Dark Mode');

  let modefunc=()=>{
    if(style.color==='black'){
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtn("Enable light mode")
    }
    else{
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtn("Enable dark mode")
    }
  } */


  return (

    
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}} data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  type="button" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" style={{backgroundColor: props.mode==='light'?'white':'#36454F', color: props.mode==='light'?'black':'white'}}>
      <div className="accordion-body" >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

