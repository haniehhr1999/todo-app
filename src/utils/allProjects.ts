import { createListCollection } from "@chakra-ui/react";

const projects = [
  {
    id: "PRJ-1001",
    title: "سیستم مدیریت کاربران"
  },
  {
    id: "PRJ-1002",
    title: "فروشگاه آنلاین"
  },
  {
    id: "PRJ-1003",
    title: "اپلیکیشن حسابداری"
  },
  {
    id: "PRJ-1004",
    title: "سیستم حضور و غیاب"
  },
  {
    id: "PRJ-1005",
    title: "پنل مدیریت محتوا"
  },
  {
    id: "PRJ-1006",
    title: "سیستم مدیریت پروژه"
  },
  {
    id: "PRJ-1007",
    title: "اپلیکیشن رزرو آنلاین"
  },
  {
    id: "PRJ-1008",
    title: "سیستم مدیریت مشتریان (CRM)"
  },
  {
    id: "PRJ-1009",
    title: "داشبورد آماری"
  },
  {
    id: "PRJ-1010",
    title: "سیستم تیکت پشتیبانی"
  },
  {
    id: "PRJ-1011",
    title: "اپلیکیشن آموزش آنلاین"
  },
  {
    id: "PRJ-1012",
    title: "سیستم مدیریت انبار"
  },
  {
    id: "PRJ-1013",
    title: "وبسایت شرکتی"
  },
  {
    id: "PRJ-1014",
    title: "اپلیکیشن موبایل فروش"
  },
  {
    id: "PRJ-1015",
    title: "سیستم مدیریت مالی"
  },
  {
    id: "PRJ-1016",
    title: "پلتفرم شبکه اجتماعی"
  },
  {
    id: "PRJ-1017",
    title: "سیستم گزارش‌گیری"
  },
  {
    id: "PRJ-1018",
    title: "اپلیکیشن نوبت‌دهی"
  },
  {
    id: "PRJ-1019",
    title: "سیستم مدیریت منابع انسانی"
  },
  {
    id: "PRJ-1020",
    title: "پلتفرم مارکت‌پلیس"
  }
];
// projects.js
const allProjects = createListCollection({
    items : projects
})

// export default
export default allProjects;

// or named export
// export { projects };
