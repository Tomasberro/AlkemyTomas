import React from "react";
import { NavBar } from "./NavBar";
import {useDispatch, useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { getTypes, postInputs } from "../redux/actions";

export function FormInput() {
    useEffect(() => {
        dispatch(getTypes());
    }, []);

    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [input, setInput] = useState({
        concept: "",
        amount: 0,
        TypeId: 1
    });

    function inputChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    function handleCheck (e){
        e.preventDefault();
        if(e.target.checked){
            setInput({
                ...input,
                TypeId: Number(e.target.value)
            });
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postInputs(input));
        console.log("post tomi")
    }
console.log(input)
    return (
        <div>
            {/* <NavBar/> */}
            <div className="form-group">
                <label htmlFor="concept">Concepto</label>
                <input
                    type="text"
                    className="form-control"
                    name="concept"
                    placeholder="Concepto"
                    onChange={inputChange}
                    value={input.concept}
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Cantidad</label>
                <input  
                    type="number"
                    className="form-control"
                    name="amount"
                    placeholder="Cantidad"
                    onChange={inputChange}
                    value={Number(input.amount)}
                />
            </div> 
            <div className="form-group">
                <label htmlFor="type">Tipo</label>
                {types && types.map(item => (
                    <div key={item.id} class="form-check">
                        <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name={item.id}
                            value={item.id}
                            onChange={handleCheck}
                        />
                         <label class="form-check-label" for="flexCheckDefault">
                         {item.type}
                    </label>
                    </div>
                ))}
            </div>
            <p>
            <button onClick={handleSubmit} class="btn btn-primary my-2" color="white">Registrar Operación</button>
            <a href="/" class="btn btn-secondary my-2">Volver</a>
          </p>   
        </div>
    );
}