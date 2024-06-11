import { useEffect, useState } from 'react'
import * as supp from './supps.json'
import SupplementsList from './SupplementsList';
import './Supplements.css'


function Supplements() {

    const [supplements, setSupplements] = useState([])

    useEffect(() => {
        setSupplements(supp.default)
    }, []);

    console.log(supplements);

function hide(params){
    console.log(params);
}

    return (

        <div className='supps'>
            <div className='supp-header'>
                <h2>Supplements</h2>
            </div>
            <div className='supp-items'>
                {supplements.map(data => (
                    < SupplementsList key={supplements._id}  hide={hide}  data={data} />
                ))}
            </div>
        </div>

    )

}

export default Supplements