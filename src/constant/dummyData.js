import {
  blog1,
  blog2,
  blog3,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  counter1,
  counter2,
  counter3,
  counter4,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
} from "./images";
import mt from '../assets/images/myths.png';
import mt1 from '../assets/images/tech.jpg';
import mt2 from '../assets/images/beprep.png';
import mt3 from '../assets/images/hire.jpeg';

export const achivementCounter = [
  {
    icon: counter1,
    num: 100 + "+",
    sector: "Team Size",
  },
  {
    icon: counter2,
    num: 15 + "+",
    sector: "Certified Partner",
  },
  {
    icon: counter3,
    num: 80+"K +",
    sector: "Customer Reach Out",
  },
  {
    icon: counter4,
    num: 90+ "%",
    sector: "Success Rate",
  },
];

export const blogArticleData = [
  {
    title: "MYTHS ABOUT VIRTUAL ASSISTANTS AND A GROUND REALITY",
    img: mt,
  },
  {
    title: "Indian Virtual Assistant’s not so virtual after all",
    img: mt1,
  },
  {
    title: "Benefits Of Hiring A Task Officer!",
    img: mt3,
  },
  {
    title: "Be prepared to face the never ending stream of Business Puzzle",
    img: mt2,
  },
];

export const courseData = [
  {
    id: [0, "marketing", "design"],
    post: "Art & desing",
    title: "Basic Fundamentals of Interior & Graphics Design",
    price: "$29.28",
    img: c1,

    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
  {
    id: [0, "design", "finance"],
    post: ["Development"],
    price: "Free",
    title: "Increasing Engagement with Instagram &Facebook",
    img: c2,
    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
  {
    id: [0, "marketing", "design"],
    post: "Drawing",
    price: "$72.39",
    title: "Introduction to Color Theory & Basic UI/ UX",
    img: c3,
    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
  {
    id: [0, "marketing"],
    post: "Tecknology",
    price: "$49.33",
    title: "Financial Security Thinking and Principles Theory",
    img: c4,
    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
  {
    id: [0, "finance", "design"],
    post: "Data science",
    title: "Logo Design: From Concept to Presentation",
    price: "Free",
    img: c5,
    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
  {
    id: [0, "design", "finance"],
    post: "Development",
    title: "Professional Ceramic Moulding for Beginners",
    price: "$84",
    img: c6,
    ratings: "4.5",
    time: "4h 30m",
    lesson: "2 Lessons",
  },
];

export const topicsData = [
  { logo: t1, title: "Data Science", quantity: "68 Courses" },
  { logo: t2, title: "UI/UX Design", quantity: "UI/UX Design" },
  { logo: t3, title: "Modern Physics", quantity: "68 Courses" },
  { logo: t4, title: "Music Production", quantity: "45 Courses" },
  { logo: t5, title: "Data Science", quantity: "68 Courses" },
  { logo: t6, title: "Finances", quantity: "68 Courses" },
  { logo: t7, title: "Global Science", quantity: "75 Courses" },
  { logo: t8, title: "Game Design", quantity: "12 Courses" },
];

export const teamData = [
  { img: team1, name: "Erics Widget", title: "UI/UX Designer" },
  { img: team2, name: "Daniel Steven", title: "Developer" },
  { img: team3, name: "Nelson Decosta", title: "Digital Marketer" },
  { img: team4, name: "Selina Gomez", title: "UI/UX Designer" },
];
export const instructorData = [
  { img: team5, name: "Erics Widget", title: "UI/UX Designer" },
  { img: team6, name: "Daniel Steven", title: "Developer" },
  { img: team7, name: "Nelson Decosta", title: "Digital Marketer" },
  { img: team8, name: "Selina Gomez", title: "UI/UX Designer" },
];

export const blogsData = [
  {
    img: blog1,
    type: "education",
    position: "admin",
    date: "jan 29, 2022",
    title: "Professional Mobile Painting and Sculpting",
  },
  {
    img: blog2,
    type: "education",
    position: "admin",
    date: "jan 29, 2022",
    title: "Professional Ceramic Moulding for Beginners",
  },
  {
    img: blog3,
    type: "education",
    position: "admin",
    date: "jan 29, 2022",
    title: "Education Is About Create Leaders For Tomorrow",
  },
];
