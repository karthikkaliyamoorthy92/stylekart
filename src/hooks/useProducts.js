import { useEffect, useState } from 'react';
import { fetchRemoteProducts } from '../api/productApi';
export default function useProducts() {
 const [remoteProducts,setRemoteProducts]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
 useEffect(()=>{const controller=new AbortController();fetchRemoteProducts(controller.signal).then(setRemoteProducts).catch(e=>{if(e.name!=='AbortError')setError(e.message)}).finally(()=>{if(!controller.signal.aborted)setLoading(false)});return ()=>controller.abort()},[]);
 return {remoteProducts,loading,error};
}
