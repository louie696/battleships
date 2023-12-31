import { useContext, useEffect, useState } from "react";
import { ShipsData } from "../../mocks";
import "./ship.css";
import { StatusContext } from "../../../StatusContext";
function Ship({ name, positions, icon }) {
  const [status, setStatus] = useState(Array(positions.length).fill(icon));
  const { shipStatus, attemptcount, isrestarting } = useContext(StatusContext);

  useEffect(() => {
    if (shipStatus.status && shipStatus.name == name) {
      setStatus((curStatus) => {
        const newStatus = [...curStatus];
        newStatus.shift();
        newStatus.push(
          <img className="status_icon" src="\assets\hit.png" alt="" />
        );
        return newStatus;
      });
    }
    if (isrestarting) {
      setStatus(Array(positions.length).fill(icon));
    }
  }, [attemptcount]);
  console.log(status);
  return (
    <div className="ship_status">
      <img className="icon" src={`\\assets\\${name}.png`} alt="" />
      <div className="status">{status}</div>
    </div>
  );
}

export default Ship;
