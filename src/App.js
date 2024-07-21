import './App.css'; 
import React, { useReducer } from 'react';

function App() {
  const [val, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'D':
        return state.filter((stagiaire) => stagiaire.code !== action.payload);
      default:
        return state;
    }
  },
  [
    {
      code: 1,
      nom: 'zeroual',
      prenom: 'fatima zahra',
      age: 19
    },
    {
      code: 2,
      nom: 'zeroual',
      prenom: 'mehdi',
      age: 17
    },
    {
      code: 3,
      nom: 'zeroual',
      prenom: 'inssaf',
      age: 20
    },
    {
      code: 4,
      nom: 'zeroual',
      prenom: 'noure',
      age: 19
    },
  ]);

  const deleteS = (code) => {
    dispatch({ type: 'D', payload: code });
  };

  const [fVal, setFVal] = useReducer((state, action) => {
    switch (action.type) {
      case 'F':
        const Filterage = action.payload;
        return val.filter((stagiaire) => stagiaire.age === Filterage);
      default:
        return state;
    }
  }, []);

  const handleA = (age) => {
    setFVal({ type: 'F', payload: age });
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th>code</th>
          <th>nom</th>
          <th>prenom</th>
          <th>age</th>
         
        </tr>
        {val.map((stagiaire) => (
          <tr className='stag' key={stagiaire.code}>
            <td>{stagiaire.code}</td>
            <td>{stagiaire.nom}</td>
            <td>{stagiaire.prenom}</td>
            <td>{stagiaire.age}</td>
            <td>
              <button onClick={() => deleteS(stagiaire.code)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </table>

      <br />

      <input
        type="text"
       
        onChange={(e) => handleA(parseInt(e.target.value))}
      />

      <br />
      <br />

      <table>
        <tr>
          <th>code</th>
          <th>nom</th>
          <th>prenom</th>
          <th>age</th>
        </tr>
        {fVal.map((stagiaire) => (
          <tr className='stag' key={stagiaire.code}>
            <td>{stagiaire.code}</td>
            <td>{stagiaire.nom}</td>
            <td>{stagiaire.prenom}</td>
            <td>{stagiaire.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
