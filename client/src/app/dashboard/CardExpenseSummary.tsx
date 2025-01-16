import { useGetDashboardMetricsQuery } from '@/state/api';
import React from "react";

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

const CardExpenseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      CardExpenseSummary
    </div>
  );
};

export default CardExpenseSummary;