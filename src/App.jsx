import React from "react";
import './css/App.css';
import { Helmet } from "react-helmet-async";
import Bienvenida from "./views/Bienvenida.jsx"

const App = () => {
  return (
    <div className="container-app">
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' https://www.google.com https://www.gstatic.com https://api.unisvg.com https://api.iconify.design https://mailbite.io/api/check;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com;
            style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com;
            connect-src 'self' https://api.simplesvg.com/ https://www.google.com https://api.unisvg.com https://api.iconify.design https://backend-robo.vercel.app https://mailbite.io/api/check;
            object-src 'none';
            frame-src 'self' https://www.google.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' https://firebasestorage.googleapis.com
            `}
        ></meta>
      </Helmet>
      <Bienvenida />
    </div>
  );
};


export default App;