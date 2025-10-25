const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple mock function to calculate keyword difficulty (basic: based on length and vowels; replace with real logic later)
function calculateDifficulty(keyword) {
  if (!keyword) return { error: 'Keyword required' };
  const length = keyword.length;
  const vowelCount = (keyword.match(/[aeiou]/gi) || []).length;
  const score = Math.min(100, length * 5 + vowelCount * 10); // Mock score (0-100)
  return {
    keyword: keyword,
    difficultyScore: score,
    explanation: score < 50 ? 'Low competition' : score < 80 ? 'Medium' : 'High'
  };
}

// Endpoint: GET /difficulty?keyword=seo+tools
app.get('/difficulty', (req, res) => {
  const keyword = req.query.keyword;
  res.json(calculateDifficulty(keyword));
});

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('SEO Keyword Difficulty API is running!');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
