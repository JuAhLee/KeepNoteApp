import { v4 } from "uuid";

const notes = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tag: "work", id: v4() }],
    color: "#ccffcc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "11/08/24 9.32 PM",
    createdTime: new Date("Sun Oct 11 2024 21:32:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tag: "learnings", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "11/08/24 9.32 PM",
    createdTime: new Date("Sun Oct 11 2024 21:32:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
