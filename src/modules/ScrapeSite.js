import GitHub from './site-plugins/GitHub';
import StackOverflow from './site-plugins/StackOverflow';

async function ScrapeSite(req) {
  const reqLc = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLc === "github") site = GitHub;
  if (reqLc === "stackoverflow") site = StackOverflow;
  return await site();
}

export default ScrapeSite;