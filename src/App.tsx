import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routesData } from './data/routes.data';
import RoutePage from './components/RoutePage';

/*
  App.tsx — Roteador central
  ─────────────────────────────────────────────────────────────
  Cada entrada em `routesData` vira automaticamente uma rota.
  Para adicionar uma nova página, basta adicionar um objeto em
  src/data/routes.data.ts — zero código duplicado.
*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map((routeData) => (
          <React.Fragment key={routeData.slug}>
            <Route
              path={routeData.slug}
              element={<RoutePage data={routeData} />}
            />
          </React.Fragment>
        ))}

        {/* Fallback: qualquer rota desconhecida redireciona para a home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
