import React from "react";

const HomePage = React.lazy(() => import("./views/home/HomePage"));
const BulkPrintPage = React.lazy(() =>
  import("./views/bulkPrint/BulkPrintPage")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/bulkPrint", name: "BulkPrintPage", component: BulkPrintPage },
  { path: "/", name: "HomePage", component: HomePage }
];

export default routes;
