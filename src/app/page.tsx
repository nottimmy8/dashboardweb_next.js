import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import React from "react";

const page = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4  gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2  ">
        <AppBarChart />
      </div>
      <div className=" shadow-sm bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transaction" />
      </div>
      <div className=" shadow-sm bg-primary-foreground p-4 rounded-lg  ">
        <AppPieChart />
      </div>
      <div className=" shadow-sm bg-primary-foreground p-4 rounded-lg ">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2  2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className=" shadow-sm bg-primary-foreground p-4 rounded-lg  ">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
};

export default page;
