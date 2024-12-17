import React, { useEffect, useMemo } from "react";
import { InputForm } from "../../../components/forms/input-forms/InputForm";
import { SubmitHandler, useForm } from "react-hook-form";
import leoProfanity from "leo-profanity";
import DefaultError from "../../../components/error/default/DefaultError";
import { profanity_dict } from "../../../objects/profanity/profanity-dict";
import {
  collection,
  doc,
  FirestoreDataConverter,
  query,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../../config/firebase";
import { CommentProp } from "../../../types/CommentProp";
import { useFirestoreColListener } from "../../../hooks/useFirestoreColListener";
import Loader1 from "../../../components/loaders/Loader1";
import CommentContainer from "../../../components/containers/comment-container/CommentContainer";

interface CommentFormProp {
  comment: string;
}

const commentsFetchConverter: FirestoreDataConverter<CommentProp> = {
  toFirestore(data: CommentProp) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      comment: data.comment,
      created_at: data.created_at,
    } as CommentProp;
  },
};

const Comments: React.FC<{ postId: string }> = ({ postId }) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<CommentFormProp>();

  const collectionRef = useMemo(() => {
    return query(
      collection(db, "posts", postId, "comments").withConverter(
        commentsFetchConverter
      )
    );
  }, []);

  const { data: comments } = useFirestoreColListener(collectionRef);

  const submit: SubmitHandler<CommentFormProp> = async (data) => {
    leoProfanity.add(profanity_dict);

    const toastId = toast.loading("please wait...");
    const containsProfanity = leoProfanity.check(data.comment);

    if (containsProfanity) {
      setError("comment", {
        type: "manual",
        message: "Please avoid using inappropriate language.",
      });
      return;
    }

    const sanitizedComment = leoProfanity.clean(data.comment);

    console.log("Sanitized Comment:", sanitizedComment);

    try {
      await runTransaction(db, async (transaction) => {
        const postRef = doc(db, "posts", postId);
        const commentsColRef = collection(db, "posts", postId, "comments");
        const postDoc = await transaction.get(postRef);
        if (!postDoc.exists()) {
          throw "Document does not exist!";
        }

        const newCommentRef = doc(commentsColRef);

        transaction.set(newCommentRef, {
          comment: data.comment,
          created_at: serverTimestamp(),
        });

        const newCommentCount = postDoc.data().comment_count + 1;
        transaction.update(postRef, { comment_count: newCommentCount });
      });

      toast.success("comment posted", {
        id: toastId,
      });
    } catch (error) {
      console.error(error);
      toast.error("something went wrong", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitted]);

  if (!comments) {
    return (
      <div>
        <Loader1 />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form className="grid grid-cols-2" onSubmit={handleSubmit(submit)}>
        <div className="col-span-full">
          <InputForm
            disabled={isSubmitting}
            placeholder="write your comment"
            {...register("comment", { required: "This field is required" })}
          />
          {errors.comment?.message && (
            <DefaultError message={errors.comment.message} />
          )}
        </div>
      </form>

      <div className="px-6 max-h-150 overflow-y-auto">
        <h1>comments</h1>
        {comments.map((comment) => (
          <CommentContainer comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
