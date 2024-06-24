import { useState } from "react";


 const useField  = ({type}) =>{
    const [value, setValue] = useState("");
    const [messageError, setMessageError] = useState("");

    const onblur = event => {
        setValue(event.target.value)
       
    }

    const onchange = event => {
        setValue(event.target.value);
    }


    return {
        type,
        value,
        messageError,
        onblur,
        onchange
    }
}

export default useField;