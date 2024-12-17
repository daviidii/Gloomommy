import { FieldValue, Timestamp } from "firebase/firestore";

export interface CommentProp {
  id: string;
  comment: string;
  created_at: FieldValue | Timestamp | Date;
}
