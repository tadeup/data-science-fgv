import DashboardView from "../views/DashboardPage/views/DashboardView";
import FormsView from "../views/DashboardPage/views/FormsView";
import StudentsView from "../views/DashboardPage/views/StudentsView"
import ReportsView from "../views/DashboardPage/views/ReportsView"

const dashboardRoutes = [
  { path: "/forms", name: "FormsView", component: FormsView },
  { path: "/students", name: "studentsPage", component: StudentsView },
  { path: "/reports", name: "ReportsView", component: ReportsView },

  // home path must come last
  { path: "/", name: "DashboardView", component: DashboardView },
];

export default dashboardRoutes;
