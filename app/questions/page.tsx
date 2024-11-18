"use client";
import { MainContent } from "@/components/MainContent/MainContent";
import { Preloader } from "@/components/Preloader";
import { WorksheetTasksData } from "@/utils/DAL/api";
import { useAppState } from "@/utils/useAppState";

export default function QuestionsPage() {
    const {
        tasks,
        loading,
        errorMessage,
      }: { tasks: WorksheetTasksData; loading: boolean; errorMessage: string } =
        useAppState();
    
      return (
        <>
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
  