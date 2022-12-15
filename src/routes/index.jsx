import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AboutUs from "../pages/AboutUsPage.jsx/AboutUs";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/ProfilePage/Profile";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>} 
        />
        <Route path="/login" element={
          <Layout>
            <LoginPage />
          </Layout>
        } />
        <Route path="/register" element={
          <Layout>
            <RegisterPage />
          </Layout>
        } />
        <Route path="about-us" element={
          <Layout>
            <AboutUs />
          </Layout>
        } />
        <Route path="/profile/:id" element={
          <Layout>
            <Profile />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}