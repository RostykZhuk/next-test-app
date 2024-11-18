"use client"
import { WorksheetTasksData } from "@/utils/DAL/api";
import { useAppState } from "@/utils/useAppState";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";
import { MainContent } from "./components/MainContent/MainContent";

export default function Home() {
  const {
    tasks,
    loading,
    errorMessage,
  }: { tasks: WorksheetTasksData; loading: boolean; errorMessage: string } =
    useAppState();

  return (
    <>
      <Header />
      {errorMessage ? (
        <p>Sorry, unfortunetly we have error. {errorMessage}</p>
      ) : loading ? (
        <Preloader />
      ) : (
        <MainContent tasks={tasks} />
      )}
    </>
  );
}
