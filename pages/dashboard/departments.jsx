/**
 * Dashboard Departments page
 *
 */

import React from "react";

import DashboardLayout from "@/components/layouts/dashboardLayout";

export default function Dashboard() {
  return (
    <React.Fragment>
      <p> Dashboard Departments Page </p>
    </React.Fragment>
  );
}

// layout
Dashboard.getLayout = (page) => <DashboardLayout> {page} </DashboardLayout>;
