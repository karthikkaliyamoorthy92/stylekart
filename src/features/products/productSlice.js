import { createSlice } from '@reduxjs/toolkit';
const starterProducts = [
 {id:101,title:'Essential Cotton Tee',category:'tshirts',price:699,brand:'Northline',rating:4.7,thumbnail:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',description:'A soft everyday cotton T-shirt with a relaxed, versatile fit.'},
 {id:102,title:'Oxford Casual Shirt',category:'shirts',price:1499,brand:'Urban Loom',rating:4.8,thumbnail:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',description:'A smart-casual Oxford shirt that works from weekdays to weekends.'},
 {id:103,title:'Classic Denim Jeans',category:'jeans',price:1899,brand:'Northline',rating:4.6,thumbnail:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',description:'Timeless denim with comfortable stretch and a clean silhouette.'},
 {id:104,title:'Minimal White Sneakers',category:'shoes',price:2299,brand:'Stepwise',rating:4.9,thumbnail:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',description:'Minimal sneakers designed to pair with nearly any casual outfit.'},
 {id:105,title:'Everyday Overshirt',category:'shirts',price:1799,brand:'Urban Loom',rating:4.5,thumbnail:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',description:'Layer-friendly overshirt with a structured look and easy comfort.'},
 {id:106,title:'Weekend Hoodie',category:'tshirts',price:1599,brand:'Northline',rating:4.7,thumbnail:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',description:'A cosy hoodie for travel, casual days, and cool evenings.'},
 {id:107,title:'Everyday Chinos',category:'jeans',price:1699,brand:'Field & Form',rating:4.4,thumbnail:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',description:'Clean-cut chinos that bring a polished finish to casual outfits.'},
 {id:108,title:'Weekend Trainers',category:'shoes',price:2499,brand:'Stepwise',rating:4.6,thumbnail:'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80',description:'Lightweight trainers built for busy days and relaxed weekends.'}
];
const slice = createSlice({name:'products', initialState:{items:starterProducts, status:'idle', error:null}, reducers:{
 addProduct(state, action){state.items.unshift({...action.payload,id:Date.now(),rating:4.5});},
 updateProduct(state, action){const index=state.items.findIndex(p=>p.id===action.payload.id);if(index!==-1)state.items[index]={...state.items[index],...action.payload};},
 deleteProduct(state, action){state.items=state.items.filter(p=>p.id!==action.payload);},
 setProducts(state, action){state.items=action.payload;state.status='succeeded';},
 setStatus(state, action){state.status=action.payload;},
 setError(state, action){state.error=action.payload;state.status='failed';}
}});
export const {addProduct,updateProduct,deleteProduct,setProducts,setStatus,setError}=slice.actions;
export default slice.reducer;
