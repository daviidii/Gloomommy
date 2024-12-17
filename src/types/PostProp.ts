import { FieldValue, Timestamp } from "firebase/firestore";

export interface PostProp {
  id: string;
  title: string;
  comment_count: number;
  message: string;
  created_at: FieldValue | Timestamp | Date;
  anonymous: boolean;
}
