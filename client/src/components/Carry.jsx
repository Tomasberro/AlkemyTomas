import { useState } from "react";
import { useDispatch } from "react-redux";



export function Carry (){
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        monto: 0,
        cotizacion: 0,
        moneda: 0,
        instrumento: "",
        rendimiento: 0,
        cotizacion2: 0,
        rendimiento2: 0,
        resultado: 0,
        porcentaje: 0
    });
    const [data, setData] = useState({
        tipodeCambio: 0,
        rendimientoPlazoFijo: 0
    });
    function dataChange(e){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

function inputChange(e){
    e.preventDefault();
    if(e.target.name === "moneda"){
        setInput({
            ...input,
            [e.target.name]: input.cotizacion * input.monto
        });
    }
    else{
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        moneda: input.cotizacion * data.tipodecambio
    });
}
}
console.log(input, "input")
console.log(data, "data")
    return(
        <div>
            <h1>Carry</h1>
            <form>
                <input name="tipodecambio" type="text" placeholder="Cotizacion usd/ars" onChange={dataChange}/>
                <input name="rendimientoplazofijo" type="text" placeholder="Rendimiento total ars" onChange={dataChange}/>
            </form>
            <form>
                <input name="monto" type="text" placeholder="Monto de inversion en Usd" onChange={inputChange} />
                <input name="cotizacion"type="text" placeholder="Cotizacion usd/ars" value={data.tipodecambio? data.tipodecambio : 0}/>
                <input name="moneda" type="text" placeholder="Moneda de destino ars" value={input.moneda? input.moneda : 0}/>
                <input name="instrumento" type="text" placeholder="Instrumento financiero" onChange={inputChange}/>
                <input name="rendimiento" type="text" placeholder="Rendimiento total ars" onChange={inputChange}/>
                <input name="cotizacion2" type="text" placeholder="Cotizacion usd/ars" onChange={inputChange}/>
                <input name="rendimiento2" type="text" placeholder="Rendimiento total en usd" onChange={inputChange}/>
                <input name="resultado" type="text" placeholder="Resultado carry trade" onChange={inputChange}/>
                <input name="porcentaje" type="text" placeholder="% carry trade" onChange={inputChange}/>
                </form>
        </div>
    )
}

export default Carry;