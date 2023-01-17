import React, {useState} from 'react'

// import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUprcaseClick = () =>{
        console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case","success");
    } ;

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    } ;    
    // text="numnebd"; //Wrong way to change the   state variable
    // setText("Enter new text");//correct way to change state
    const handleLowercaseClick = () => {
        console.log("Lower case clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case", "success");
    }
    const handlecapitalcase = () => {
        // handlextraspace();
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        let newtext = words.join(" ");
        setText(newtext);
        props.showAlert("capitalise first letter of each word", "success");
    }
    const handlealttext = () => {
        let altText = text.toLowerCase().split("");
        console.log(altText);
        for (let i =0; i< altText.length; i=i+2) {
            altText[i] = altText[i].toUpperCase();
            console.log(altText[i]);

        }
        let newtext = altText.join("");
        setText(newtext);
        props.showAlert("altered text", "success");
    }

    const handlecopy = () => {
        // console.log(text);
        let text = document.getElementById("mybox");
        console.log(text);
        text.select();
        navigator.clipboard.writeText(text.value);
        // setText(newtext);
        props.showAlert("Text copied!", "success");
    }
    const handlextraspace= () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed xtra spaces", "success");
    }

    const handleclearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("cleared!", "success");
    }

    
   return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="mybox" className="form-label"></label> */}
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',Color:props.mode==='dark'?'white':'black'}} id="mybox" rows='8'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUprcaseClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowercaseClick}> Convert to lower case</button>
            <button className="btn btn-primary mx-1" onClick={handlecapitalcase}>Capitalize case</button>
            <button className="btn btn-primary mx-1" onClick={handlealttext}>alternative case</button>
            <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text </button>
            <button className="btn btn-primary mx-1" onClick={handlextraspace}>Remove xtra spaces </button>
            <button className='btn btn-primary mx-1' onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1> Your Text summary </h1>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <p> {text.length>0?text.split(" ").length:0} words {text.length} characters </p>
            <p> {0.008 * text.split(" ").length} minutes read </p>
            <h2>Preview</h2>
            <p> {text.length > 0?text:"Enter Something in above text box to preview it here!"} </p>
        </div>        
    </>    
    )
}

// Textform.propTypes = {
//     heading: PropTypes.string.isRequired
// }

// export default Textform;

