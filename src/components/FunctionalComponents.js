import { useState } from "react";

function FunctionalComponents(){
    const [showPara, setShowPara] = useState(false)

    return (
        <div>
            <button id="click" onClick={()=> setShowPara(true)}>
                Click
            </button>

            {showPara && (
                <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
            )}
        </div>
    )
}
export default FunctionalComponents;