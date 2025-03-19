import { useEffect} from "react";
import ProgressBar from "./ProgressBar";

const Timer=3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(()=>{
  const Timer = setTimeout(()=>{
      console.log("Timer Set here")
      onConfirm();
    },3000)
    return(()=>{
      console.log("Cleaning up Timeout")
      clearTimeout(Timer);
    })

  },[onConfirm])
 
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    <ProgressBar Timer={Timer}/>
    </div>
  );
}
