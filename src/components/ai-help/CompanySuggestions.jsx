import QueryBox from "./QueryBox";

const CompanySuggestions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🏢 Company Suggestions</h2>
      <p className="text-muted-foreground">Get job opportunities and company matches based on your skills.</p>
      <QueryBox />
    </div>
  );
};
export default CompanySuggestions;
