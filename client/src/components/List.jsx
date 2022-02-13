import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {TrashIcon, PencilIcon} from '@primer/octicons-react';

import UpdateList from "./UpdateList";
import { deleteInput, filterType } from "../redux/actions";

export function List (){
    const dispatch = useDispatch();
   
    const listAll = useSelector(state => state.inputs);
    console.log(listAll)
    function handleDelete (id){
        dispatch(deleteInput(id));

    }
    function handleFilterType (e){
        e.preventDefault()
dispatch(filterType(e.target.value));
    }
    return(
        <div>
            <div className="container">
                <div className="row d-flex justify-content-around">
  <select
              className="Select"
              id="types"
              onChange={(e) => handleFilterType(e)}
            >
              <option value="All">Tipos</option>
              {listAll &&
                listAll.map((item) => {
                  return (
                    <option key={item.id} value={item.TypeId}>
                      {item.Type.type}
                    </option>
                  );
                })}
            </select>
               </div>
                <div className="row d-inline">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h3>Listado de Ordenes</h3>
                                {listAll ? listAll.map(item => (
                                    <div className="card-body" key={item.id}>
                                        <h5 className="card-title">{item.concept}</h5>
                                        <p className="card-text">{item.amount}</p>
                                        <p className="card-text">{item.date.substring(0,10)}</p>
                                        <p className="card-text">{item.Type.type}</p>
                                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                                             <PencilIcon size={16} />
                                        </button>
                                         <UpdateList id={item.id}/> 
                                        <button type="button" class="btn btn-danger" onClick={() => handleDelete(item.id)}> <TrashIcon size={16} />
                                        </button>
                                    </div>
                                ))
                            : <h2>Null</h2>}
                          
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
          
        </div>        
        
    )
}