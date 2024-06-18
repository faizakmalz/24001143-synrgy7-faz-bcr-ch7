
"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import Car from "../../types/types";


export default function TransactionTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>User Email</Table.HeadCell>
          <Table.HeadCell>Car</Table.HeadCell>
          <Table.HeadCell>Start Rent</Table.HeadCell>
          <Table.HeadCell>Finish Rent</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            1
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            2
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            3
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            4
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            5
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            6
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            7
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            8
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            9
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            10
            </Table.Cell>
            <Table.Cell>User Email</Table.Cell>
            <Table.Cell>Car</Table.Cell>
            <Table.Cell>Start Rent</Table.Cell>
            <Table.Cell>Finish Rent</Table.Cell>
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>Status</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export function CarsTable() {
    const [cars, setCars] = useState<Car[]>([]);


    useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await axiosInstance.get("/cars");
            setCars(response.data);
          } catch (error) {
            console.error("Error fetching cars:", error);
          }
        };
    
        fetchCars();
      }, []);

    return (
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Model</Table.HeadCell>
            <Table.HeadCell>Brand</Table.HeadCell>
            <Table.HeadCell>Plate</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Capacity</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cars.map((car, index) => (
                <Table.Row key={car.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                </Table.Cell>
                <Table.Cell>{car.model}</Table.Cell>
                <Table.Cell>{car.manufacture}</Table.Cell>
                <Table.Cell>{car.plate}</Table.Cell>
                <Table.Cell>{car.description}</Table.Cell>
                <Table.Cell>{car.capacity}</Table.Cell>
                <Table.Cell>{car.rentPerDay}</Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
