// mockData.js
export const mockData = {
    user: {
      labels: ['Alumnos', 'Profesores', 'Jueces'],
      data: [30, 20, 50]
    },
    project: {
      labels: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
      data: [7, 2, 12, 9, 5, 6]
    },
    projectStatus: {
      labels: ['Revisado', 'Pendiente'],
      data: [35, 65]
    }
};

export const checklistItems = [
    { id: 1, text: 'Software for data collection and analysis (e.g., Excel, data analysis software)' },
    { id: 2, text: 'Plants or seeds for biology experiments' },
    { id: 3, text: 'Sensors (e.g., temperature sensors, light sensors)' },
    { id: 4, text: 'Model kits for biology, chemistry, physics, etc.' },
    { id: 5, text: 'Camera or smartphone for documentation' },
];

export const userTabledata = [
  { id: 1, name: "Usuario1", roles: ["Profesor", "Juez"] },
  { id: 2, name: "Usuario2", roles: ["Alumno"] },
  { id: 3, name: "Usuario3", roles: ["Juez", "Administrador"] },
  { id: 4, name: "Usuario4", roles: ["Profesor", "Administrador"] },
  { id: 5, name: "Usuario5", roles: ["Alumno"] },
  { id: 6, name: "Usuario6", roles: ["Profesor", "Juez"] },
  { id: 7, name: "Usuario7", roles: ["Alumno"] },
  { id: 8, name: "Usuario8", roles: ["Profesor", "Juez", "Administrador"] },
  { id: 9, name: "Usuario9", roles: ["Profesor"] },
  // Add more data as needed
];


export const mockProjects = [
  {
    id: 1,
    title: "Project A",
    review: true,
    img: "mockProject.jpeg",
    categories: ["Nexus", "Idea"],
    edition: "2023 - Fall"
  },
  {
    id: 2,
    title: "Project B",
    review: false,
    img: "mockProject.jpeg",
    categories: ["Cyber", "Prototipo"],
    edition: "2023 - Spring"
  },
  {
    id: 3,
    title: "Project C",
    review: true,
    img: "mockProject.jpeg",
    categories: ["Bio", "Idea"],
    edition: "2022 - Fall"
  },
  {
    id: 4,
    title: "Project D",
    review: true,
    img: "mockProject.jpeg",
    categories: ["Nexus", "Prototipo"],
    edition: "2022 - Spring"
  },
  {
    id: 5,
    title: "Project E",
    review: false,
    img: "mockProject.jpeg",
    categories: ["Cyber", "Idea"],
    edition: "2021 - Fall"
  },
  {
    id: 6,
    title: "Project F",
    review: true,
    img: "mockProject.jpeg",
    categories: ["Bio", "Idea"],
    edition: "2021 - Spring"
  },
  {
    id: 7,
    title: "Project G",
    review: false,
    img: "mockProject.jpeg",
    categories: ["Nexus", "Prototipo"],
    edition: "2021 - Fall"
  },
  {
    id: 8,
    title: "Project H",
    review: false,
    img: "mockProject.jpeg",
    categories: ["Cyber", "Idea"],
    edition: "2021 - Spring"
  },
  {
    id: 9,
    title: "Project I",
    review: true,
    img: "mockProject.jpeg",
    categories: ["Bio", "Idea"],
    edition: "2022 - Spring"
  },
  {
    id: 10,
    title: "Project J",
    review: false,
    img: "mockProject.jpeg",
    categories: ["Prototipo","Nexus", "Idea"],
    edition: "2022 - Fall"
  }
];

export const dropdownOptions = ["2023 - Fall", "2023 - Spring", "2022 - Fall", "2022 - Spring", "2021 - Fall", "2021 - Spring"];
