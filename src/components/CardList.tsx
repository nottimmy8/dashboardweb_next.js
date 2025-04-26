import { title } from "process";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
const popularcontent = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 2,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 4,
    title: "Subscription Renewal",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with Ai ",
    badge: "Ai",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 2,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 4,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/31737021/pexels-photo-31737021/free-photo-of-serene-rocky-coastline-with-calm-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    count: 1400,
  },
];

const list = title === "Popular COntent" ? popularcontent : latestTransactions;

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-medium mb-6  ">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className=" flex flex-row items-center justify-between gap-4 p-2"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className=" flex-1  p-0 ">
              <CardTitle className="text-sm font-medium">
                {item.title}{" "}
              </CardTitle>
              <Badge variant="secondary">{item.badge} </Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
