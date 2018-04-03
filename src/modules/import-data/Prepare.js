import MakePayload from './MakePayload';
import ScrapeSite from './ScrapeSite';

const Prepare = async (site, state) => {
  return await ScrapeSite(site)
    .then(res => MakePayload(res, state))
    .then(res => res)
}

export default Prepare;