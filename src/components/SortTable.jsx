import React from 'react'
import MockData from '../MOCK DATA1.json'
export default function SortTable() {
    const [data, setdata] = useState(MockData)
  return (
    <div className='contanier'>
        <table className=' table table-border'>

        
        <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
        </thead>
        <tbody>
        {data.map((d)=>(
            <tr key={d.id}>
                <td>{d.first_name}</td>
                <td>{d.last_name}</td>
                <td>{d.email}</td>
                <td>{d.gender}</td>


            </tr>
        ))}
        </tbody>
        </table>
            
    </div>
  )
}
