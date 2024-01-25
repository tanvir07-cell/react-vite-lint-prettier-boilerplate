function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

export const TASKS = [
  {
    title: "Test Driven Development",
    description:
      "Test-Driven Development (TDD) is a software development methodology that emphasizes writing tests before writing the actual code.",
    tags: ["Web", "Testing"],

    id: crypto.randomUUID(),
    priority: "High",
    isFavourite: true,
  },
  {
    title: "Vite Build Tool",
    description:
      "Vite, derived from the French word for lives up to its name by providing a swift and efficient build tool for web development.",
    tags: ["Vite", "Build"],
    // {
    //   id: crypto.randomUUID(),
    //   name: "Testing",
    //   color: generateRandomHexColor(),
    // },

    id: crypto.randomUUID(),
    priority: "Low",
    isFavourite: true,
  },
  {
    title: "Node Streams",
    description:
      "Node.js Streams are a crucial component in the Node.js platform, designed to handle large volumes of data efficiently and asynchronously.",
    tags: ["Node", "Streams", "Asynchronous"],
    id: crypto.randomUUID(),
    priority: "High",
    isFavourite: false,
  },
];
