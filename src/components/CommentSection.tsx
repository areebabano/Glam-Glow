import { Comment } from "@/src/app/types/types";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 bg-gray-50 rounded">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-gray-600 text-sm">{comment.date}</p>
          <p className="mt-2">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection; 