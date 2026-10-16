# StyleKart — React Final Assignment

A responsive men's fashion storefront built with React + Vite. This is a frontend training project; checkout and contact forms are demonstrations, not production payment or messaging systems.

## Run locally

1. Install Node.js (LTS recommended).
2. Extract the ZIP and open this folder in VS Code.
3. In the terminal run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite, normally http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Deploy to Netlify

- Push the project to GitHub and import the repository in Netlify.
- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` is included for React Router SPA route fallback.
- Deploy, then test the root URL, product detail URLs, category nested routes, cart and checkout.

## Pages and topics demonstrated

- Home, Products, Product Details, Categories and nested Category Details, Cart, Checkout, Orders, About, Contact and Admin Products.
- React Router DOM, nested routing, `useParams`, `useSearchParams`, `useState`, `useEffect`, `useRef`, `useContext`, `useReducer`, custom hooks, conditional/list rendering, props, API integration, Redux Toolkit, CRUD and form validation.
- Cart state and product administration use Redux Toolkit. Order history uses browser localStorage. The product API uses DummyJSON; if unavailable, the built-in demo products remain usable.

## Notes

- The `/admin/products` route is a demonstration admin page and is not protected by authentication.
- CRUD changes to the product catalogue are in-memory Redux state and reset on reload.
- The public API and remote image URLs require an internet connection.
- Orders are simulated; no real payments, email messages or backend requests are made.
