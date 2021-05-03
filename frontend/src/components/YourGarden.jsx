import axios from "axios";
import {useState, useEffect} from 'react';
import CardSingle from './CardSingle';

const YourGarden = () => {
    const [data, setData] = useState([]);
    const [mounted,setMounted] = useState(false)
    const token = '0cbd3ad53963332da92f39ef72e321fc821ce87a'
    const getData = async () => {
		const res = await axios.get(`http://127.0.0.1:8000/gardens/api/gardenplants/`,{
            headers: {
                'Authorization': `Token ${token}`
            }
        });
		const data = res.data;
        const postData = data.map((pd) => (
			<div key={pd.plant.id}>
				<CardSingle
					title={pd.plant.common_name}
					description={pd.plant.description}
					image={pd.plant.image}
				/>
			</div>
		));
		setData(postData);
            ;
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
