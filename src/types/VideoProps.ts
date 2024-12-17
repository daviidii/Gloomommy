import { FieldValue, Timestamp } from "firebase/firestore";

export interface VideoProps {
  id: string;
  thumbnail_url: string;
  title: string;
  description: string;
  video_url: string;
  created_at: FieldValue | Timestamp | Date;
}
