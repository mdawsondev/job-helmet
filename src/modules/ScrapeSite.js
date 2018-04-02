import GitHub from './site-plugins/GitHub';
import Indeed from './site-plugins/Indeed';
import StackOverflow from './site-plugins/StackOverflow';

let GH = new GitHub();
let IN = new Indeed();
let SO = new StackOverflow();

async function ScrapeSite(req) {
  const reqLc = req.toLowerCase();
  let site = () => `"${req}" is not a valid request.`;
  if (reqLc === "github") site = GH.harvestData;
  if (reqLc === "indeed") site = IN.harvestData;
  if (reqLc === "stackoverflow") site = SO.harvestData;
  return await site();
}

export default ScrapeSite;