import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview/index";
import OrderOverview2 from "layouts/dashboard/components/OrderOverview/OrderOverview2";
import { useContext, useState } from "react";
import UserContext from "context/UserContext";

function Dashboard() {
  const msg = useContext(UserContext);
  return (
    <DashboardLayout>
      {/* <p style={{ color: "red" }}>{msg}</p> */}
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
            <OrderOverview2 />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
