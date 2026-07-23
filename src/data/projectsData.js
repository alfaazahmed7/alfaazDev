// image import
import delicioutrecipeImage from "@/assests/delicious-recipe.png";
import digitaltoolImage from "@/assests/digital-tool.png";
import dragonnewsImage from "@/assests/dragonnews.png";
import englishjanalaImage from "@/assests/english-janala.png";
import keenkeeperImage from "@/assests/keenkeeper.png";
import neomotorsImage from "@/assests/neomotors1.png";
import tilixImage from "@/assests/tilix.png";
import wanderlustImage from "@/assests/wanderlust.png";
import promptAIImage from "@/assests/promptai.png";
import launchDeckImage from "@/assests/launchdeck.png";

// react icons import
import neomotorsIcon from "@/assests/project-icons/car.png";
import wanderlustIcon from "@/assests/project-icons/travel-bag.png";
import tilixIcon from "@/assests/project-icons/tiles.png";
import keenkeeperIcon from "@/assests/project-icons/friends.png";
import dragonnewsIcon from "@/assests/project-icons/newspaper.png";
import deliciousrecipeIcon from "@/assests/project-icons/recipe.png";
import englishjanalaIcon from "@/assests/project-icons/english.png";
import digitaltoolIcon from "@/assests/project-icons/repairing.png";
import promptAIIcon from "@/assests/project-icons/prompt-delivery.png";
import launchDeckIcon from "@/assests/project-icons/launchdeck.png";


const projects = [
    {
        id: 9,
        icon: promptAIIcon,
        title: "PromptAI",
        description: "PromptAI is a full-stack AI prompt marketplace built with Next.js, Express.js, and MongoDB, featuring secure authentication, role-based dashboards (User, Creator, Admin), Stripe payments, analytics, reviews, bookmarks, and prompt management.",
        image: promptAIImage,
        featured: true,
        liveUrl: "https://prompt-ai-client.vercel.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/promptAI-client",
        githubServerUrl: "https://github.com/alfaazahmed7/promptAI-server",
        tags: [
            "Next.js",
            "React19",
            "Node.js",
            "Express.js",
            "DaisyUI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
            "Recharts",
            "framer-motion",
        ],
        stack: 'Full-Stack'
    },
    {
        id: 10,
        icon: launchDeckIcon,
        title: "LaunchDeck",
        description: "LaunchDeck is a full-stack project showcase platform built with Next.js, Express.js, TypeScript, and MongoDB, featuring secure authentication, project publishing and management, featured projects, advanced search, filtering, sorting, pagination, and a responsive modern UI.",
        image: launchDeckImage,
        featured: true,
        liveUrl: "https://launch-deck-fawn.vercel.app",
        githubClientUrl: "https://github.com/alfaazahmed7/launchDeck-client",
        githubServerUrl: "https://github.com/alfaazahmed7/launchDeck-server",
        tags: [
            "TypeScript",
            "Next.js",
            "React19",
            "DaisyUI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "framer-motion",
        ],
        stack: 'Full-Stack'
    },
    {
        id: 1,
        icon: neomotorsIcon,
        title: "NeoMotors",
        description: "NeoMotors is a modern luxury car booking platform built with Next.js, React, MongoDB, and Better Auth, featuring premium UI/UX, secure authentication, and dynamic car management.",
        image: neomotorsImage,
        featured: true,
        liveUrl: "https://neomotors-client.vercel.app",
        githubClientUrl: "https://github.com/alfaazahmed7/neomotors-client",
        githubServerUrl: "https://github.com/alfaazahmed7/neomotors-server",
        tags: [
            "Next.js",
            "React.js",
            "Node.js",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
            "Express.js",
        ],
        stack: 'Full-Stack'
    },
    {
        id: 2,
        icon: wanderlustIcon,
        title: "Wanderlust",
        description: "Wanderlust is a modern booking platform where user can book awsome destination. This app built with Next.js, React, Node.js, Express.js, and MongoDB with secure authentication. A flatform where user can book destination with their full trust.",
        image: wanderlustImage,
        featured: false,
        liveUrl: "https://wanderlust-client-gold.vercel.app",
        githubClientUrl: "https://github.com/alfaazahmed7/wanderlust-client",
        githubServerUrl: "https://github.com/alfaazahmed7/wanderlust-server",
        tags: [
            "Next.js",
            "React.js",
            "Node.js",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
        stack: 'Full-Stack'
    },
    {
        id: 3,
        icon: tilixIcon,
        title: "Tilix",
        description: "Tilix is a full-stack web app focused on building a clean, intuitive tile discovery experience, where I designed and developed core features end-to-end.",
        image: tilixImage,
        featured: true,
        liveUrl: "https://tilix-eight.vercel.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/tilix",
        tags: [
            "Next.js",
            "React19",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
    {
        id: 4,
        icon: keenkeeperIcon,
        title: "KeenKeeper",
        description: "KeenKeeper helps you stay connected by tracking communication gaps and reminding you to maintain your friendships through a simple, clean interface.",
        image: keenkeeperImage,
        featured: false,
        liveUrl: "https://keenkeeper-zeta.vercel.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/assignment-07",
        tags: [
            "Next.js",
            "React19",
            "DaisyUI",
            "Hero UI",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
    {
        id: 5,
        icon: dragonnewsIcon,
        title: "Dragon News",
        description: "Dragon News is a full-stack web app focused on building a clean, intuitive news discovery experience, where I designed and developed core features end-to-end.",
        image: dragonnewsImage,
        featured: false,
        liveUrl: "https://tilix-eight.vercel.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/dragon-news",
        tags: [
            "Next.js",
            "React19",
            "DaisyUI",
            "Hero UI",
            "Better Auth",
            "MongoDB",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
    {
        id: 6,
        icon: deliciousrecipeIcon,
        title: "Delicious Recipe",
        description: "A modern React-based recipe web app that lets users explore, search, and discover delicious meals by category, cuisine, and ingredients, with a clean UI and smooth user experience.",
        image: delicioutrecipeImage,
        featured: true,
        liveUrl: "https://delicious-recipe-three.vercel.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/Delicious-Recipe",
        tags: [
            "React19",
            "DaisyUI",
            "Hero UI",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
    {
        id: 7,
        icon: englishjanalaIcon,
        title: "English Janala",
        description: "A simple and engaging English learning web app built with HTML, CSS, and JavaScript. It helps beginners practice English vocabulary with dynamically loaded word cards, Bangla meanings, and interactive pronunciation features.",
        image: englishjanalaImage,
        featured: false,
        liveUrl: "https://english-janala-dapp.netlify.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/English-Janala",
        tags: [
            "Next.js",
            "React19",
            "DaisyUI",
            "Hero UI",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
    {
        id: 8,
        icon: digitaltoolIcon,
        title: "Digital Tools",
        description: "Digital Tools is a modern React-based web app where users can explore, select, and purchase digital services through an interactive and user-friendly interface with real-time cart management.",
        image: digitaltoolImage,
        featured: false,
        liveUrl: "https://digital-tools-web-app.netlify.app/",
        githubClientUrl: "https://github.com/alfaazahmed7/Assignment-06",
        tags: [
            "Next.js",
            "React19",
            "DaisyUI",
            "Hero UI",
            "Tailwind CSS",
        ],
        stack: 'Frontend'
    },
];

export default projects;