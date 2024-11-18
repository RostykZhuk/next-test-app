"use client";
import { Preloader } from "@/components/Preloader";
import { AnswerRecord } from "@/utils/handleAnswer";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function MyAnswersPage() {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = useCallback(async () => {
    setLoading(true);
    // testing delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const currentRecordsString: string | null =
      sessionStorage.getItem("answerRecords");
    const currentRecords: AnswerRecord[] = currentRecordsString
      ? JSON.parse(currentRecordsString)
      : [];
    setAnswers(currentRecords);
    setLoading(false);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return loading ? (
    <Preloader />
  ) : (
    <div className="mx-8 mt-10 mb-5 sm:mx-24 sm:mt-10 sm:mb-5 pb-20 bg-green-100 border border-gray-300 p-6 shadow-lg rounded-lg">
      <h1 className="text-primary-500 font-bold text-xl sm:text-2xl md:text-4xl text-center mb-6">
        Your Answers
      </h1>
      {answers.length ? (
        answers.map((answer) => (
          <div
            key={answer.taskId}
            className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow transition-transform transform hover:scale-105"
          >
            <p className="font-semibold text-primary-400 text-sm sm:text-xl">
              Question #{answer.taskId}
            </p>
            <p className="text-primary-500 text-xs sm:text-lg">
              Your answer: Option #{answer.optionId}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-700 flex flex-col items-center mt-10">
          <span className="text-xl sm:text-2xl mb-4">😢</span>
          <span className="font-bold text-sm sm:text-xl md:text-2xl">
            You haven’t answered any questions yet.
          </span>
          <span className="text-xs sm:text-base text-gray-500 mt-2">
            Take a challenge and try answering some questions!
          </span>
          <Link
            href="/questions"
            className="mt-4 px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-400 transition-colors"
          >
            Start Now
          </Link>
        </p>
      )}
    </div>
  );
}
