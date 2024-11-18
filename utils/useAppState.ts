"use client"
import { useEffect, useState } from "react";
import { API, WorksheetTasksData } from "./DAL/api";

export const useAppState = () => {
  const [tasks, setTasks] = useState<WorksheetTasksData>({ tasks: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      setErrorMessage("");
      setLoading(true);
      try {
        const worksheetTasks: WorksheetTasksData =
          await API.getWorksheetTasks();
        setTasks(worksheetTasks);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error fetching data: ", error);
        setErrorMessage(error.response?.data.message || "Error fetching data");
      } finally {
        // testing delay
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    getData();
  }, []);

  return { tasks, loading, errorMessage };
};
