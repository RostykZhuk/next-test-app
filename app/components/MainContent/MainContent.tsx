import { WorksheetTasksData } from "@/utils/DAL/api";
import { Navigation, Pagination } from "swiper/modules";
import { WorksheetTask } from "./WorksheetTask";
import { Swiper, SwiperSlide } from "swiper/react";

export const MainContent = ({ tasks }: { tasks: WorksheetTasksData }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
  >
    {tasks.tasks.map((task, index) => (
      <SwiperSlide key={task.id}>
        <WorksheetTask task={task} number={index + 1} />
      </SwiperSlide>
    ))}
  </Swiper>
);
