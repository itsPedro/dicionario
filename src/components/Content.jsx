import {useState} from 'react';
import ResultList from './Result';

function Content() {

    const [termo, setTermo] = useState('');
    const [inputValue, setInputValue] = useState('');
  

    const handleTermo = (text) => setTermo(text.target.value);
   
    const handleSubmit = () => {
        setInputValue(termo)
        setTermo('');
    };

    const handleInputKeyDown = (event) => {
        return event.key === 'Enter' && (setInputValue(termo), setTermo(''));
    }

    return (
        <div className='text-white'>

            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>

                <div className='flex justify-center col-start-2 col-span-2 mt-4'>
                    <input onChange={handleTermo} value={termo} onKeyDown={handleInputKeyDown} type='text' className='flex rounded-lg px-4 py-2 md:w-80 text-black' placeholder='Ex: Felicidade...'/>
                    <button onClick={handleSubmit} className='bg-sky-600 px-4 py-2 rounded ml-4'>Pesquisar</button>
                </div>

                <div className='bg-slate-900 bg-opacity-70 p-6 rounded-lg col-start-2 col-span-2  min-h-screen mt-4'>
                    <h1 className='ml-20 mt-20 text-slate-400 font-bold text-4xl'><span>{inputValue}</span></h1>
                    <ResultList param={inputValue}/>
                </div>

            </div>

      </div>
    )

}

export default Content;