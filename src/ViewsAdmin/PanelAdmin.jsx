import React from 'react';
import { EncabezadoAdmin, BotonMenu } from '../ViewsAdmin/ComponenetesAdmin/Encabezado.jsx';
function PanelAdmin() {
  return (
    <div className="flex">
      <BotonMenu />
      <div className="flex-1 ml-40">
        <EncabezadoAdmin />
        <div className="p-6">
          {/* Imagen de contenido del dashboard */}
          <img 
            src="https://www.modux.co/wp-content/uploads/2023/07/3.webp" 
            alt="Dashboard"
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
}
export default PanelAdmin;
