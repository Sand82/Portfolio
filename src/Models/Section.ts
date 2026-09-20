import type { ReactNode } from "react";

export interface SectionProps {
  id: string;
  sectionNumber: string;
  title: string;
  children: ReactNode;
}
