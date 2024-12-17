import React, { useState } from "react";
import BoxContainer from "../box-container/BoxContainer";
import { PostProp } from "../../../types/PostProp";
import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import { Button } from "../../buttons/Button";

import { FaCommentAlt } from "react-icons/fa";
import Comments from "../../../pages/community/comments/Comments";

const PostContainer: React.FC<{ post: PostProp }> = ({ post }) => {
  const [openComment, setOpenComment] = useState<boolean>(false);

  const handleOpenComment = () => {
    setOpenComment((prev) => !prev);
  };
  return (
    <BoxContainer
      variant="900"
      key={post.id}
      className="py-10 border-b w-full space-y-6 px-1"
    >
      <div className="flex items-center gap-6">
        <p>Anonymous</p>
        <span>-</span>
        <p>
          {post.created_at instanceof Timestamp
            ? format(post.created_at.toDate(), "MMMM d, yyyy")
            : "Unknown date"}
        </p>
      </div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">{post.title}</h2>

        <p className="font-light">{post.message}</p>
      </div>
      <div className="flex items-center">
        <Button className="flex items-center gap-6" onClick={handleOpenComment}>
          <FaCommentAlt />
          {post.comment_count || 0}
        </Button>
      </div>

      {openComment && <Comments postId={post.id} />}
    </BoxContainer>
  );
};

export default PostContainer;
