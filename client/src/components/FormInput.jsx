import React from "react";
import { NavBar } from "./NavBar";

export function FormInput() {
    return (
        <div>
            <NavBar/>
            <div className="form-group">
                <label htmlFor="concept">Concepto</label>
                <input
                    type="text"
                    className="form-control"
                    id="concept"
                    placeholder="Concepto"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Cantidad</label>
                <input  
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Cantidad"
                />
            </div>    
        </div>
    );
}