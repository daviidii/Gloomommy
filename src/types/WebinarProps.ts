import { FieldValue, Timestamp } from "firebase/firestore";

export interface WebinarProp {
  id: string;
  thumbnail_url: string;
  title: string;
  description: string;
  type: "live" | "recorded";
  video_url: string | null;
  webinar_link_url: string | null;
  created_at: FieldValue | Timestamp | Date;
  scheduled_date: FieldValue | Timestamp | Date | null;
}
