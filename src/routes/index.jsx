import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AboutUs from "../pages/AboutUsPage.jsx/AboutUs";
import AllQuestions from "../pages/AllQuestionsPage.jsx/AllQuestions";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MyQuestions from "../pages/MyQuestionsPage/MyQuestions";
import Pricing from "../pages/Pricing/Pricing";
import Profile from "../pages/ProfilePage/Profile";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UnAnsweredQuestions from "../pages/UnAnsweredQuestions.jsx/UnAnsweredQuestions";

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
        <Route path="all-questions" element={
          <Layout>
            <AllQuestions />
          </Layout>
        } />
        <Route path="pricing" element={
          <Layout>
            <Pricing />
          </Layout>
        } />
        <Route path="unanswered-questions" element={
          <Layout>
            <UnAnsweredQuestions />
          </Layout>
        } />
        <Route path="about-us" element={
          <Layout>
            <AboutUs />
          </Layout>
        } />
        <Route path="my-questions" element={
          <Layout>
            <MyQuestions />
          </Layout>
        } />
        <Route path="profile" element={
          <Layout>
            <Profile />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}