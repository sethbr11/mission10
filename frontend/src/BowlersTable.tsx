import { useEffect, useState } from 'react';
import { Bowler } from './types/Bowler';

function BowlersTable() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5231/api/BowlingLeague');
      const b = await rsp.json();
      setBowlerData(b);
    };

    fetchBowlerData();
  }, []);

  return (
    <div>
      <div>
        <h1>BLE Bowlers</h1>
      </div>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {bowlerData.map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerLastName}</td>
                <td>
                  {b.bowlerFirstName} {b.bowlerMiddleInit}
                </td>
                <td>
                  {b.bowlerAddress}, {b.bowlerCity}, {b.bowlerState}{' '}
                  {b.bowlerZip}
                </td>
                <td>{b.bowlerPhoneNumber}</td>
                <td>{b.teamId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BowlersTable;