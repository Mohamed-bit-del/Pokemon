import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

type NavigationRouterProps = {
  children: React.ReactElement;
};

const NavigationRouter: React.FC<NavigationRouterProps> = function NavigationRouter({ children }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon-grid-view" replace />} />
      <Route path="/pokemon-grid-view" element={children} />
      <Route path="/pokemon-detail-page" element={children} />
      <Route path="/pokemon/:id" element={children} />
      <Route path="*" element={<Navigate to="/pokemon-grid-view" replace />} />
    </Routes>
  );
};

export default NavigationRouter;