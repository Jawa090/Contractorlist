import { useAppSelector } from "@/store/hooks";
import { Navigate } from "react-router-dom";
import ContractorDashboard from "./ContractorDashboard";
import ClientDashboard from "./ClientDashboard";
import VendorDashboard from "./VendorDashboard";

const Dashboard = () => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Route based on user role
  if (user?.role === 'contractor') {
    return <ContractorDashboard />;
  } else if (user?.role === 'vendor') {
    return <VendorDashboard />;
  } else {
    return <ClientDashboard />;
  }
};

export default Dashboard;