import { useState, useEffect } from 'react';
import Meaning  from './Meaning'
import axios from 'axios';

axios.defaults.baseURL = 'https://dicio-api-ten.vercel.app/v2/'

const ResultList = (props) => {


    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async(param) => {
        try {
            setLoading(true);
            const res = await axios(`/${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        props.param.length && fetchData(props.param);
    }, [props.param]);

    if(loading) {
        return (

            <h1 className='text-center align-center p-20 text-sky-300 font-bold text-2xl'>Carregando...</h1>
        )
    } 

    if(error) {
        return (
            <h1 className='text-center align-center p-20 text-rose-700 font-bold text-2xl'>:( <br /> Não foi possível achar uma definição.</h1>
        )
    } 

    return( 
        <div>
            <h1 className="font-bold ml-10 mt-10 text-slate-400 text-xl">Definição</h1>
            <h2 className='flex px-8 justify-start'> {}</h2>   
  
        </div>
    )
};

export default ResultList;