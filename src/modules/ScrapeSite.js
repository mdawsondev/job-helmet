import GitHub from './site-plugins/GitHub';
import StackOverflow from './site-plugins/StackOverflow';

async function ScrapeSite(req) {
  const reqLC = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLC === "github") site = GitHub;
  if (reqLC === "stackoverflow") site = StackOverflow;
  return await site();
}

export default ScrapeSite;