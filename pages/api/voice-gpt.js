export default function handler(req, res) {
  const { prompt } = req.body;
  if (prompt?.includes("dusche")) {
    return res.status(200).json({
      element: "Dusche",
      x: 500,
      y: 10,
      width: 90,
      height: 90,
    });
  }
  res.status(200).json({});
}