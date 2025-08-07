import { Card, CardContent } from "../../ui/card";

const BlogCard = ({ title, content, date, author }) => {
  return (
    <Card className="rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white border">
      <CardContent className="p-6 space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm">{content}</p>
        <div className="pt-2 text-xs text-gray-400">
          <span>By {author}</span> • <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
};
export default BlogCard;
