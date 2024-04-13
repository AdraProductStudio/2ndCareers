import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Dashboard from '../../layouts/Dashboard'

const Home = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']
    
    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <Dashboard />
        </>
    )
}

export default Home
