import React from "react";
import BoxContainer from "../box-container/BoxContainer";
import { CommentProp } from "../../../types/CommentProp";
import { Timestamp } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

const CommentContainer: React.FC<{ comment: CommentProp }> = ({ comment }) => {
  return (
    <BoxContainer className="space-y-2.5 p-6 border-b" key={comment.id}>
      <div className="flex items-center justify-between font-light gap-6 text-sm">
        <p>Anonymous</p>

        <p>
          {comment.created_at instanceof Timestamp
            ? `${formatDistanceToNow(comment.created_at.toDate(), {
                addSuffix: true,
              })}`
            : "Unknown date"}
        </p>
      </div>

      <p className="font-medium text-sm">{comment.comment}</p>
    </BoxContainer>
  );
};

export default CommentContainer;
