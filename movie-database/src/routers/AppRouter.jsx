import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageMovie from '../pages/PageMovie';
import PageNotFound from '../pages/PageNotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { appTitle, appAuthor } from '../globals/globalVariables';

const AppRouter = () => {
  return (
      <div className="wrapper">
        <Header title={appTitle} />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourites" element={<PageFavourites />} />
          <Route path="/movie/:id" element={<PageMovie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer author={appAuthor} />
      </div>
  );
};

export default AppRouter;