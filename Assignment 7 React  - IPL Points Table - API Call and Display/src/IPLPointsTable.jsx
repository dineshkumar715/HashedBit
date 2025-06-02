import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();

        // Sort data by NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPointsTable();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>IPL 2022 Points Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '80%', margin: '0 auto' }}>
        <thead>
          <tr>
            <th style={thStyle}>Team</th>
            <th style={thStyle}>Played</th>
            <th style={thStyle}>Won</th>
            <th style={thStyle}>Lost</th>
            <th style={thStyle}>Tied</th>
            <th style={thStyle}>NRR</th>
            <th style={thStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td style={tdStyle}>{team.Team}</td>
              <td style={tdStyle}>{team.Played}</td>
              <td style={tdStyle}>{team.Won}</td>
              <td style={tdStyle}>{team.Lost}</td>
              <td style={tdStyle}>{team.Tied}</td>
              <td style={tdStyle}>{team.NRR}</td>
              <td style={tdStyle}>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '8px 12px',
  backgroundColor: '#f2f2f2',
  textAlign: 'center',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px 12px',
  textAlign: 'center',
};

export default IPLPointsTable;