import axios from "axios";
import {useState, useEffect} from 'react';
import CardSingle from './CardSingle';

const YourGarden = () => {
    const [data, setData] = useState([]);
    const [mounted,setMounted] = useState(false)
    const token = 'f8e90f2caa0179b2f05ca8e7a628e0e83b70af3c'
    const getData = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/gardens/api/gardenplants/`,{
            headers: {
                'Authorization': `Token ${token}`
            }
        });
		const data = res.data;
        const postData = data.map((pd) => (
			<div key={pd.id}>
				<CardSingle
					title={pd.plant.common_name}
					description={pd.plant.description}
					image={pd.plant.image}
				/>
			</div>
		));
		setData(postData);
            
    };
    useEffect(() => {
		if (mounted === false){
            getData();
            setMounted(true)
        } 
	},[mounted]);
    return (
        <div>
            <div className="cards">{data}</div>
        </div>
    )
}

export default YourGarden
