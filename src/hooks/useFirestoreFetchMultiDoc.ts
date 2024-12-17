import {
  getDocs,
  Query,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFirestoreFetchMultiDoc = <T = DocumentData>(
  ref: Query<T> | null
) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ref) return;

    const fetchCollection = async () => {
      setIsLoading(true);

      try {
        const snapshot: QuerySnapshot<T> = await getDocs(ref);
        const documents: T[] = snapshot.docs.map((doc) => doc.data());
        setData(documents);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    console.log("fetched documents");
    fetchCollection();
  }, [ref]);

  return { data, isLoading, error };
};
