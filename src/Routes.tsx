import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/pokemon-screen/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import PokemonLoadMoreView from './pages/pokemon-load-more-view';
import PokemonGridView from './pages/pokemon-grid-view';
import PokemonDetailPage from './pages/pokemon-detail-page';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<PokemonGridView />} />
          <Route path="/pokemon-load-more-view" element={<PokemonLoadMoreView />} />
          <Route path="/pokemon-grid-view" element={<PokemonGridView />} />
          <Route path="/pokemon-detail-page" element={<PokemonDetailPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;