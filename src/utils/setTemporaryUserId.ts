import { v4 } from "uuid";

const userId = localStorage.getItem("temId");

export default function setTemUserId(): string {
  if (!userId) {
    const userId = v4();
    localStorage.setItem("temId", userId);
  }
  return userId as string;
}
