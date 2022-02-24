import React from "react";
import {  putInput } from "../redux/actions";
import { useDispatch } from "react-redux";


export default function UpdateList(id) {
    const dispatch = useDispatch();
    const [input, setInput] = React.useState({
        concept: "",
        amount: 0,
    });
 
    const idget =Number(localStorage.getItem("primerId"));
    console.log(idget);
 
  
    function inputChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
 console.log(input, id)
    async function handleUpdate(idget){
         console.log(idget, input)

        await  dispatch(putInput((idget), input));
    }
  return (
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Concepto:</label>
            <input type="text" class="form-control"  onChange={inputChange}
                 name="concept"   value={input.concept}/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Cantidad:</label>
            <textarea class="form-control"  type="number" onChange={inputChange}
                 name="amount"   value={Number(input.amount)}></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=> handleUpdate(idget)}>Send message</button>
      </div>
    </div>
  </div>
</div>
  )
}