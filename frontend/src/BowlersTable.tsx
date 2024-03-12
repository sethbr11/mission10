import { useEffect, useState } from 'react';
import { Bowler } from './types/Bowler';

function BowlersTable() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // From the videos
  //useEffect(() => {
  //  const fetchBowlerData = async () => {
  //    const rsp = await fetch('http://localhost:5231/api/BowlingLeague');
  //    const b = await rsp.json();
  //    setBowlerData(b);
  //  };
  //
  //  fetchBowlerData();
  //}, []);

  // Updated to handle errors thrown when the backend isn't running (generated w/ help from ChatGPT)
  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        const rsp = await fetch('http://localhost:5231/api/BowlingLeague');
        if (!rsp.ok) {
          throw new Error('Failed to fetch data');
        }
        const b = await rsp.json();
        setBowlerData(b || []); // Set empty array if response is falsy
      } catch (error) {
        console.error('Error fetching data:', error);
        setBowlerData([]); // Set empty array in case of error
      }
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
