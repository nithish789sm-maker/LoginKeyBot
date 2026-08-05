export default function handler(req, res) {
  res.status(200).json({
    message: "LoginKeyBot is running!",
    status: "OK"
  });
}
