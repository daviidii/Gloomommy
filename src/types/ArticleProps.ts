import { FieldValue, Timestamp } from "firebase/firestore";
import { ReferencedLinkProps } from "./ReferencedLinksProp";

export interface ArticleProps {
  id?: string;
  title: string;
  author: string;
  created_at: FieldValue | Timestamp | Date | null;
  cover_url: string;
  referenced_links: ReferencedLinkProps[];
  tags: string[];
  summary: string;
  content: string;
}
