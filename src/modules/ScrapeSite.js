import GitHub from './site-plugins/GitHub';
import StackOverflow from './site-plugins/StackOverflow';
import Indeed from './site-plugins/Indeed';

async function ScrapeSite(req) {
  const reqLc = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLc === "github") site = GitHub;
  if (reqLc === "indeed") site = Indeed;
  if (reqLc === "stackoverflow") site = StackOverflow;
  return await site();
}

export default ScrapeSite;