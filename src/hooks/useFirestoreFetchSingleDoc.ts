import {
  getDoc,
  DocumentReference,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFirestoreFetchSingleDoc = <T = DocumentData>(
  ref: DocumentReference<T> | null
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ref) return;

    const fetchDocument = async () => {
      setIsLoading(true);

      try {
        const snapshot: DocumentSnapshot<T> = await getDoc(ref);
        if (snapshot.exists()) {
          setData(snapshot.data());
        } else {
          setData(null); // Document doesn't exist
        }
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    console.log("fetched document");
    fetchDocument();
  }, [ref]);

  return { data, isLoading, error };
};
