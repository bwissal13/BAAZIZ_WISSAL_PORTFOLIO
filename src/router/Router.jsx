import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
