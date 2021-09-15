import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PetsList = () => {
    const [pets, setPets]=useState([]);
    useEffect(()=>{
        loadAllPets();
    },[]);

    const loadAllPets = () => {
        const allPets = [
            {
                id: 1,
                name: 'pet001',
                status: 'ok'                
            },
            {
                id: 3,
                name: 'teste00002',
                status: 'available'                
            },
            {
                id: 5,
                name: 'jimmy',
                status: 'pending'                
            },
            {
                id: 8,
                name: 'doggie',
                status: 'available'                
            }
        ];
        setPets([...allPets]);
    }

    return (
        <>
            <h1>Pets List</h1>            
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        pets.map(pet => 
                        
                            <tr key={pet.id}>
                                <td>
                                    <Link className="nav-link" to={`/Pets/${pet.id}`}>View</Link>
                                </td>
                                <td>{pet.name}</td>
                                <td>{pet.status}</td>
                            </tr>
                        
                        )
                    }
                    
                </tbody>
            </table>
        </>
    );
}
export default PetsList;