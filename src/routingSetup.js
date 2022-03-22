import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import { MailCollection } from "./pages/mailCollection";
export const AppRouter = () => {
    return(        
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mail_collection" element={<MailCollection />} />
            </Routes>
        </BrowserRouter>
    )
}