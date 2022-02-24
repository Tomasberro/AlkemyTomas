import React from "react";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from 'jwt-decode';
import { getInputs, getInputsByUser, getToken } from '../redux/actions';

export function Home (){
    const dispatch = useDispatch();
    let x;
      if (localStorage.getItem("token")) {
        x = getToken();
      }
      console.log(x);
      const decoded = x ? jwt_decode(x) : null;
      console.log(decoded);
      let userId = decoded ? decoded.user.id : null;
  
    useEffect(() => {
  dispatch(getInputsByUser(userId));
    }, [dispatch]);

    const inputsHome = useSelector(state => state.inputs);
    const ingresosHome= useSelector(state => state.ingresos);
    const egresosHome = useSelector(state => state.egresos);
    const listadoHome = useSelector(state => state.listado);
  
console.log(ingresosHome, egresosHome, listadoHome)
    return (
        <div >
            {/* <NavBar/> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Saldo: {ingresosHome- egresosHome}</h3>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>   
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                        { listadoHome && listadoHome.map(item => (
                                <div className="card-body" key={item.id}>
                                    <h5 className="card-title">{item.concept}</h5>
                                    <p className="card-text">{item.amount}</p>
                                    <p className="card-text">{item.date.substring(0,10)}</p>
                                    <p className="card-text">Tipo: {item.Type.type}</p>
                                    <p className="card-text">Categoría: {item.Category.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

         </div>
    )
}