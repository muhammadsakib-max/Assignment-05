export interface TechnologiesDataType {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps" | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}
