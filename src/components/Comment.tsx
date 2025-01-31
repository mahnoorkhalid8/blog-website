"use client";

import React, { useEffect, useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const saveComments = localStorage.getItem("comments");
    if(saveComments) {
      setComments(JSON.parse(saveComments));
    }
  }, []);

  const addComment = () => {
    if (comment.trim() !== "") {
      const newComments = ([...comments, comment]);
      setComments(newComments);
      setComment("");
      localStorage.setItem("comments", JSON.stringify(newComments));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-white">
        Comment Box
      </h2>
      <input
        type="text"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-auto border-4 border-solid border-black my-3 p-3 text-black"
      />
      <br />
      <button
        onClick={addComment}
        className="bg-gray-500 text-white p-2 rounded-md"
      >
        Add Comment
      </button>
      <div>
        <h3 className="text-xl font-serif font-base mt-3 text-white">
          All Comments:
        </h3>
        {comments.length === 0 ? (
          <p className="text-white">No comments yet!</p>
        ) : (
          <ul>
            {" "}
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
