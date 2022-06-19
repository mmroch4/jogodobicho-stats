import type { GetStaticProps, NextPage } from "next";
import {
  Abelha,
  Baleia,
  Bode,
  Cachorro,
  Camelo,
  Carneiro,
  Cavalo,
  Cobra,
  Coelho,
  Elefante,
  Esquilo,
  Formiga,
  Galo,
  Golfinho,
  Jacare,
  Joaninha,
  Macaco,
  Passaro,
  Peru,
  Polvo,
  Porco,
  Tartaruga,
  Tigre,
  Touro,
  Vaca,
} from "../components/icons";
import { IResponse } from "../interface/api/IResponse";
import { IStats } from "../interface/api/IStats";
import { api } from "../services/api";
import styles from "../styles/pages/index.module.scss";
import { getAnimalName } from "../utils/animals";
import { currency } from "../utils/currency";

type IProps = IStats;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: {
      response: { payload },
    },
  } = await api.get<IResponse<IStats>>("/stats");

  return {
    props: {
      ...payload,
    },
    revalidate: 2 * 60, // 2 minutes
  };
};

const Page: NextPage<IProps> = ({
  jackpot,
  lastWinnerAnimal,
  biggestPaycheckLastRound,
  biggestPaycheckEver,
  bet: { amount: betAmount, biggestValue: biggestBetValue },
  animals,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h2>Rodadas passadas</h2>

        <div className={styles.box_grid}>
          <div className={styles.box}>
            <h3>Último animal vencedor</h3>
            <p>{getAnimalName(lastWinnerAnimal)}</p>
          </div>

          <div className={styles.box}>
            <h3>Maior paycheck da última rodada</h3>
            <p>{currency(biggestPaycheckLastRound ?? 0)}</p>
          </div>

          <div className={styles.box}>
            <h3>Maior paycheck de sempre</h3>
            <p>{currency(biggestPaycheckEver ?? 0)}</p>
          </div>
        </div>
      </div>

      <div className={styles.inner}>
        <h2>Rodada atual</h2>

        <div className={styles.box_grid}>
          <div className={styles.box}>
            <h3>Jackpot</h3>
            <p>{currency(jackpot)}</p>
          </div>

          <div className={styles.box}>
            <h3>Número de apostas</h3>
            <p>{betAmount}</p>
          </div>

          <div className={styles.box}>
            <h3>Maior aposta</h3>
            <p>{currency(biggestBetValue)}</p>
          </div>
        </div>
      </div>

      <div className={styles.inner}>
        <h2>Rodada atual: animais</h2>

        <div className={`${styles.box_grid} ${styles.animals_grid}`}>
          <div className={styles.box}>
            <div>
              <Esquilo />
            </div>
            <div>
              <h3>{getAnimalName(1)}</h3>
              <p>{currency(animals["1"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Polvo />
            </div>
            <div>
              <h3>{getAnimalName(2)}</h3>
              <p>{currency(animals["2"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Formiga />
            </div>
            <div>
              <h3>{getAnimalName(3)}</h3>
              <p>{currency(animals["3"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Baleia />
            </div>
            <div>
              <h3>{getAnimalName(4)}</h3>
              <p>{currency(animals["4"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Cachorro />
            </div>
            <div>
              <h3>{getAnimalName(5)}</h3>
              <p>{currency(animals["5"])}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.box_grid} ${styles.animals_grid}`}>
          <div className={styles.box}>
            <div>
              <Abelha />
            </div>
            <div>
              <h3>{getAnimalName(6)}</h3>
              <p>{currency(animals["6"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Bode />
            </div>
            <div>
              <h3>{getAnimalName(7)}</h3>
              <p>{currency(animals["7"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Carneiro />
            </div>
            <div>
              <h3>{getAnimalName(8)}</h3>
              <p>{currency(animals["9"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Cobra />
            </div>
            <div>
              <h3>{getAnimalName(9)}</h3>
              <p>{currency(animals["9"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Coelho />
            </div>
            <div>
              <h3>{getAnimalName(10)}</h3>
              <p>{currency(animals["10"])}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.box_grid} ${styles.animals_grid}`}>
          <div className={styles.box}>
            <div>
              <Cavalo />
            </div>
            <div>
              <h3>{getAnimalName(11)}</h3>
              <p>{currency(animals["11"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Elefante />
            </div>
            <div>
              <h3>{getAnimalName(12)}</h3>
              <p>{currency(animals["12"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Galo />
            </div>
            <div>
              <h3>{getAnimalName(13)}</h3>
              <p>{currency(animals["13"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Camelo />
            </div>
            <div>
              <h3>{getAnimalName(14)}</h3>
              <p>{currency(animals["14"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Jacare />
            </div>
            <div>
              <h3>{getAnimalName(15)}</h3>
              <p>{currency(animals["15"])}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.box_grid} ${styles.animals_grid}`}>
          <div className={styles.box}>
            <div>
              <Golfinho />
            </div>
            <div>
              <h3>{getAnimalName(16)}</h3>
              <p>{currency(animals["16"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Macaco />
            </div>
            <div>
              <h3>{getAnimalName(17)}</h3>
              <p>{currency(animals["17"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Porco />
            </div>
            <div>
              <h3>{getAnimalName(18)}</h3>
              <p>{currency(animals["18"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Passaro />
            </div>
            <div>
              <h3>{getAnimalName(19)}</h3>
              <p>{currency(animals["19"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Peru />
            </div>
            <div>
              <h3>{getAnimalName(20)}</h3>
              <p>{currency(animals["20"])}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.box_grid} ${styles.animals_grid}`}>
          <div className={styles.box}>
            <div>
              <Touro />
            </div>
            <div>
              <h3>{getAnimalName(21)}</h3>
              <p>{currency(animals["21"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Tigre />
            </div>
            <div>
              <h3>{getAnimalName(22)}</h3>
              <p>{currency(animals["22"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Tartaruga />
            </div>
            <div>
              <h3>{getAnimalName(23)}</h3>
              <p>{currency(animals["23"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Joaninha />
            </div>
            <div>
              <h3>{getAnimalName(24)}</h3>
              <p>{currency(animals["24"])}</p>
            </div>
          </div>

          <div className={styles.box}>
            <div>
              <Vaca />
            </div>
            <div>
              <h3>{getAnimalName(25)}</h3>
              <p>{currency(animals["25"])}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
