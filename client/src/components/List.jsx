import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {TrashIcon, PencilIcon} from '@primer/octicons-react';
import { postInputs } from "../redux/actions";

export function List (){
    const dispatch = useDispatch();
    const [input, setInput] = React.useState({
        concept: "",
        amount: 0,
    });
    function inputChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    async function handleUpdate(id){
        console.log(id, input)

        await  dispatch(postInputs(id, input));
    }
    const listAll = useSelector(state => state.inputs);
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h3>Listado de Ordenes</h3>
                                {listAll && listAll.map(item => (
                                    <div className="card-body" key={item.id}>
                                        <h5 className="card-title">{item.concept}</h5>
                                        <p className="card-text">{item.amount}</p>
                                        <p className="card-text">{item.date.substring(0,10)}</p>
                                        <p className="card-text">{item.Type.type}</p>
                                        <button type="button" class="btn btn-success" onClick={()=> handleUpdate(item.id)}>
                                             <PencilIcon size={16} />
                                        </button>
                                        <button type="button" class="btn btn-danger"> <TrashIcon size={16} />
                                        </button>
                                    </div>
                                ))}
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        
    )
}