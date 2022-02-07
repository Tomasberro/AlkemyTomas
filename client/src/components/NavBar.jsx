import React from "react";
import { Link } from "react-router-dom";

export function NavBar (){
    return(
            <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <Link to="/input">
      <h4 class="text-white">Ingresar nueva operación</h4>
      </Link>
      <a href="/list" class="text-white">Listado de Ordenes</a>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    )
}