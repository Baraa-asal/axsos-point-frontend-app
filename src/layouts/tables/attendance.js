import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Attendance() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ paddingTop: 200, paddingBottom: 230, color: "#6f2c90" }}>
        this is where our fancy camera supposed to be okay?
      </div>

      <Footer />
    </DashboardLayout>
  );
}

export default Attendance;
