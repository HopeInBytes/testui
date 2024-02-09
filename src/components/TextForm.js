import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked"  +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
      // console.log("uppercase was clicked"  +  text);
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = () =>{
    // console.log("uppercase was clicked"  +  text);
    let newText = '';
    setText(newText)
}
const handleSliceClick = () =>{
  // console.log("uppercase was clicked"  +  text);
  // let newText = text.toTitleCase;
  let newText = text.slice(1, 4);
  setText(newText)
}
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);

    }
    const handleCopy =() =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(""))
    }
   // Text = "new twxt"; //wrong way
   // setText = "New text"; //correct way
   const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', 
        color:props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleSliceClick}>Slice</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
    
      
    </div>
    
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minuts of read</p>
   <h2>
    Preview   </h2>
    <p>{text.length>0?text:"enter someting inthe textbox above to preview "}</p>
    </div>
    </>
  );
}
