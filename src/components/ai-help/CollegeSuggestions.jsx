import QueryBox from "./QueryBox";

const CollegeSuggestions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎓 College Suggestions</h2>
      <p className="text-muted-foreground">Tool to get personalized college recommendations.</p>
      <QueryBox />
    </div>
  );
};
export default CollegeSuggestions;
