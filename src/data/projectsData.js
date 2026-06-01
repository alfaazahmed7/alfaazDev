import tilixImage from "@/assests/tilix.png";
import keenkeeperImage from "@/assests/keenkeeper.png";
import dragonnewsImage from "@/assests/dragonnews.png";
import delicioutrecipeImage from "@/assests/delicious-recipe.png";
import englishjanalaImage from "@/assests/english-janala.png";
import digitaltoolImage from "@/assests/digital-tool.png"

const projects = [
    {
        id: 1,
        title: "Tilix",
        description: "Tilix is a full-stack web app focused on building a clean, intuitive tile discovery experience, where I designed and developed core features end-to-end.",
        image: tilixImage,
        featured: true,
        liveUrl: "https://tilix-eight.vercel.app/",
        githubUrl: "https://github.com/alfaazahmed7/tilix",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        id: 2,
        title: "KeenKeeper",
        description: "KeenKeeper helps you stay connected by tracking communication gaps and reminding you to maintain your friendships through a simple, clean interface.",
        image: keenkeeperImage,
        featured: true,
        liveUrl: "https://keenkeeper-zeta.vercel.app/",
        githubUrl: "https://github.com/alfaazahmed7/assignment-07",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        id: 3,
        title: "Dragon News",
        description: "Dragon News is a full-stack web app focused on building a clean, intuitive news discovery experience, where I designed and developed core features end-to-end.",
        image: dragonnewsImage,
        featured: true,
        liveUrl: "https://tilix-eight.vercel.app/",
        githubUrl: "https://github.com/alfaazahmed7/dragon-news",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        id: 4,
        title: "Delicious Recipe",
        description: "A modern React-based recipe web app that lets users explore, search, and discover delicious meals by category, cuisine, and ingredients, with a clean UI and smooth user experience.",
        image: delicioutrecipeImage,
        featured: true,
        liveUrl: "https://delicious-recipe-three.vercel.app/",
        githubUrl: "https://github.com/alfaazahmed7/Delicious-Recipe",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        id: 5,
        title: "English Janala",
        description: "A simple and engaging English learning web app built with HTML, CSS, and JavaScript. It helps beginners practice English vocabulary with dynamically loaded word cards, Bangla meanings, and interactive pronunciation features.",
        image: englishjanalaImage,
        featured: true,
        liveUrl: "https://english-janala-dapp.netlify.app/",
        githubUrl: "https://github.com/alfaazahmed7/English-Janala",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        id: 6,
        title: "Digital Tools",
        description: "Digital Tools is a modern React-based web app where users can explore, select, and purchase digital services through an interactive and user-friendly interface with real-time cart management.",
        image: digitaltoolImage,
        featured: true,
        liveUrl: "https://digital-tools-web-app.netlify.app/",
        githubUrl: "https://github.com/alfaazahmed7/Assignment-06",
        tags: [
            "Next.js",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
];

export default projects;