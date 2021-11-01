
import React, {useState} from "react";
import {Wrapper} from "./NumberPad/Wrapper";
import generateOutNumber from "./NumberPad/generateOutNumber";


const NumberPadSection:React.FC = ()=>{
    const [outNumber,_setOutNumber] = useState("0")
    const setOutNumber=(num:string)=>{
        if (outNumber.length>=16){
            num= num.slice(0,16)
        }
        _setOutNumber(num)
    }
    const onButtonWrapper = (e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
        if (text===null)return
        if (text==="ok"){
            // TODO
            return
        }
        if ("0123456789.".split("").concat(['删除',"清空"]).indexOf(text)>=0){
                setOutNumber(generateOutNumber(text,outNumber))
        }
    }
    return(
        <Wrapper>
            <div className="output">
                {outNumber}
            </div>
            <div className="pad clearfix" onClick={onButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button className="point">.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}