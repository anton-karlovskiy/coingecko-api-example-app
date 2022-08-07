import type { NextPage } from 'next';

import SFTable, {
  SFThead,
  SFTr,
  SFTh,
  SFTbody,
  SFTd

} from 'components/UI/SFTable';
import { EXCHANGE_COUNT } from 'config/general';
import { CoingeckoExchange } from 'types/general.d';

interface Props {
  exchanges: Array<CoingeckoExchange>;
}

const Home: NextPage<Props> = ({ exchanges }) => {
  return (
    <SFTable>
      <SFThead>
        <SFTr>
          <SFTh>
            Name
          </SFTh>
          <SFTh>
            Country
          </SFTh>
          <SFTh>
            URL
          </SFTh>
          <SFTh>
            Logo
          </SFTh>
          <SFTh>
            Trust rank
          </SFTh>
        </SFTr>
      </SFThead>
      <SFTbody>
        {exchanges.map((item: CoingeckoExchange) => {
          return (
            <SFTr key={item.id}>
              <SFTd>
                {item.name}
              </SFTd>
              <SFTd>
                {item.country}
              </SFTd>
              <SFTd>
                {item.url}
              </SFTd>
              <SFTd>
                {item.image}
              </SFTd>
              <SFTd>
                {item.trust_score_rank}
              </SFTd>
            </SFTr>
          );
        })}
      </SFTbody>
    </SFTable>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=${EXCHANGE_COUNT}`);
  const data = await res.json();

  return { props: { exchanges: data } };
}

export default Home;
