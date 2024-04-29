import React from 'react';
    import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
    
    const AdminLayout = ({ children }) => (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/guides">Guides</NavLink>
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
    
    const Home = () => (<span>Home</span>);
    const Dashboard = () => (<span>Dashboard</span>);
    const Guides = () => (<span>Guides</span>);
    
    const App = () => {
        return (
            <BrowserRouter>
                <AdminLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/guides" element={<Guides />} />
                    </Routes>
                </AdminLayout>
            </BrowserRouter>
        );
    };
            
    export default App;
