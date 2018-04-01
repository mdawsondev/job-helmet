import getGH from './site-plugins/GitHub';
import getSO from './site-plugins/StackOverflow';

async function ScrapeSite(req) {
  const reqLC = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLC === "github") site = getGH;
  if (reqLC === "stackoverflow") site = getSO;
  return await site();
}

export default ScrapeSite;