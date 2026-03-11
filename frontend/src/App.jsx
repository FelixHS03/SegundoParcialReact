import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';

function App() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div className={isDark ? 'app theme-dark' : 'app'}>
            <MainLayout>
                <Routes>
                    <Route
                        path="/"
                        element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
                    />
                    <Route
                        path="/about"
                        element={<About isDark={isDark} />}
                    />
                    <Route
                        path="/products"
                        element={<Products isDark={isDark} />}
                    />
                </Routes>
            </MainLayout>
        </div>
    );
}

export default App;
