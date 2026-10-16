import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminProducts from './pages/AdminProducts';
function NotFound(){return <section className="empty-state not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Looks like this page took a different turn.</h1><p>Let's get you back to something good.</p><a className="button button-dark" href="/">Back home ↗</a></section>}
export default function App(){return <Routes><Route element={<MainLayout/>}><Route index element={<Home/>}/><Route path="products" element={<Products/>}/><Route path="products/:id" element={<ProductDetails/>}/><Route path="categories" element={<Categories/>}><Route path=":categoryId" element={<CategoryDetails/>}/></Route><Route path="cart" element={<Cart/>}/><Route path="checkout" element={<Checkout/>}/><Route path="orders" element={<Orders/>}/><Route path="about" element={<About/>}/><Route path="contact" element={<Contact/>}/><Route path="admin/products" element={<AdminProducts/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
