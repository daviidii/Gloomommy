import {
  onSnapshot,
  Query,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFirestoreColListener = <T = DocumentData>(ref?: Query<T>) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ref) return;

    // Set loading to true when listener is set up
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot: QuerySnapshot<T>) => {
        const arr: T[] = [];
        snapshot.forEach((doc) => {
          arr.push(doc.data());
        });

        setData(arr);
        setIsLoading(false);
      },
      (err: Error) => {
        setError(err);
        console.error(err);
        setData(null);
        setIsLoading(false);
      }
    );

    console.log("documents captured");
    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, [ref]);

  return { data, isLoading, error };
};
