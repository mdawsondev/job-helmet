import GitHub from '../site-plugins/GitHub';
import Indeed from '../site-plugins/Indeed';
import StackOverflow from '../site-plugins/StackOverflow';

async function ScrapeSite(req) {
  const reqLc = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLc === "github") site = GitHub.harvestData;
  if (reqLc === "indeed") site = Indeed.harvestData;
  if (reqLc === "stackoverflow") site = StackOverflow.harvestData;
  return await site();
}

export default ScrapeSite;