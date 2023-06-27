/**
 * Dashboard Index page
 * 
 */

import DashboardLayout from "@/components/layouts/dashboardLayout"
import React from "react"

export default function Dashboard() {

    return <React.Fragment>
        <p> Dashboard Index Page </p>
    </React.Fragment>
}


Dashboard.getLayout = page => <DashboardLayout> {page} </DashboardLayout>