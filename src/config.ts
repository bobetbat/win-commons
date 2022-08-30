import type { NetworkInfo, NetworkMode } from './types';
import { assetsCurrencies } from './types';

// re-exports
export { assetsCurrencies };

// The default time zone
export const defaultZone = 'Etc/GMT0';

// All networks configuration
export const allowedNetworks: readonly NetworkInfo[] = Object.freeze([
  {
    name: 'Localhost',
    chainId: 31337,
    rpc: 'http://127.0.0.1:8545',
    blockExplorer: '',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
      winPay: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeif5mtgb4mtvvqbhw2kdr4uruu5xm742vtwa3cwndpnsqdb2t4676m.ipfs.dweb.link/3408.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeid73zglo2wfukmuriny5s2chgnn6wqn2mtbogscnmi56ylth6n52i.ipfs.w3s.link/jpyc.jpg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'EURS',
          symbol: 'EURS',
          address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: true,
          currency: 'EUR'
        }
      ]
    },
    mode: ['dev']
  },
  {
    name: 'Sokol Testnet',
    chainId: 77,
    rpc: 'https://sokol.poa.network',
    blockExplorer: 'https://blockscout.com/poa/sokol',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0x3196f354b7a95413E30889D1C6cE5074b10c43f5',
      winPay: '0x6f2fBD652A99Db4b8143c8383Ae39b5459268685',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x25149dE5afe2043C61687AD136527d2167EFC241',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x25149dE5afe2043C61687AD136527d2167EFC241',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USDC',
          symbol: 'USDC',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeif5mtgb4mtvvqbhw2kdr4uruu5xm742vtwa3cwndpnsqdb2t4676m.ipfs.dweb.link/3408.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'JPYC',
          symbol: 'JPYC',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeid73zglo2wfukmuriny5s2chgnn6wqn2mtbogscnmi56ylth6n52i.ipfs.w3s.link/jpyc.jpg',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'EURS',
          symbol: 'EURS',
          address: '0x1C375919362730AC69c5ACffeC775F11c9b75cF2',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: true,
          currency: 'EUR'
        }
      ]
    },
    mode: ['stage']
  },
  {
    name: 'Gnosis Chain',
    chainId: 100,
    rpc: 'https://poa-xdai-archival.gateway.pokt.network/v1/lb/626573f1aa777e00391a8d04',
    blockExplorer: 'https://blockscout.com/xdai/mainnet',
    currency: 'xDAI',
    decimals: 18,
    contracts: {
      ledger: '0xc2024b4Ff3764b8AEb5FCfB4f248124B80A2367a',
      winPay: '0x5C0B415099ce28ce621E6525558704F89ABef71E',
      assets: [
        {
          name: 'Native xDAI',
          symbol: 'xDAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          decimals: 18,
          image: 'https://bafybeiesj7lzhl7gb3xnnazkozdh6cdsby2nmgphqc6ts6rnlf4mnczzbm.ipfs.dweb.link/8635.png',
          native: true,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Wrapped xDAI',
          symbol: 'wxDAI',
          address: '0x63Ad8dEDe7c16704187F5287744977Cd7E424761',
          decimals: 18,
          image: 'https://bafybeicj27bao6jkip26yhvc32tcyror5asop6dfxk3db67yfkxc6me6ym.ipfs.dweb.link/9021.png',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'USD Coin',
          symbol: 'USDC',
          address: '0x73B7D1A3799c8C2a73a15A1a4c079B42E817054a',
          decimals: 18,
          image: 'https://bafybeihn6h3j36k44zhvxretauc6dy6w6eapjenzmita7pvwrelg4pksvi.ipfs.w3s.link/usdc.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Tether (USDT)',
          symbol: 'USDT',
          address: '0x92276d981126e6D055C02fb756EB2fCd8DeC2Cb1',
          decimals: 18,
          image: 'https://bafybeihieb7drjnn6t3qu7yqpzkxxexwddqm6amztkzhtognckinogb42q.ipfs.w3s.link/usdt.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Jarvis Synthetic Euro',
          symbol: 'jEUR',
          address: '0xd59ac854Ad85bC9f26208d86E5B3eD3712c44b47',
          decimals: 18,
          image: 'https://bafybeiawrza7iznptwiu6tm2yjv63ch2zqkj4wddvkwqgjbpwjwypmfnia.ipfs.w3s.link/jEUR.webp',
          native: false,
          permit: true,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Swiss Franc',
          symbol: 'jCHF',
          address: '0x2FfF9CEC2c934511B475be1BF385231d4299cd35',
          decimals: 18,
          image: 'https://bafybeidqdluz7vh6pldk7ttoczoffuu3zzf72q22jzuepjkrqtuwskajma.ipfs.w3s.link/jCHF.webp',
          native: false,
          permit: true,
          currency: 'CHF'
        }
      ]
    },
    mode: ['prod']
  },
  {
    name: 'Polygon PoS Chain',
    chainId: 137,
    rpc: 'https://poly-mainnet.gateway.pokt.network/v1/lb/626573f1aa777e00391a8d04',
    blockExplorer: 'https://polygonscan.com',
    currency: 'MATIC',
    decimals: 18,
    contracts: {
      ledger: '0xc2024b4Ff3764b8AEb5FCfB4f248124B80A2367a',
      winPay: '0xFd7f48A3D88e8733a0A7bf4bbB8253fE010A418f',
      assets: [
        {
          name: 'DAI',
          symbol: 'DAI',
          address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
          decimals: 18,
          image: 'https://bafybeib3jectyea4yc72lokdyjx7nhzgqvl7oyo4taacpoz7ak2tdeq4ma.ipfs.w3s.link/dai.webp',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'USD Coin',
          symbol: 'USDC',
          address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          decimals: 18,
          image: 'https://bafybeihn6h3j36k44zhvxretauc6dy6w6eapjenzmita7pvwrelg4pksvi.ipfs.w3s.link/usdc.png',
          native: false,
          permit: true,
          currency: 'USD'
        },
        {
          name: 'Tether (USDT)',
          symbol: 'USDT',
          address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          decimals: 18,
          image: 'https://bafybeihieb7drjnn6t3qu7yqpzkxxexwddqm6amztkzhtognckinogb42q.ipfs.w3s.link/usdt.png',
          native: false,
          permit: false,
          currency: 'USD'
        },
        {
          name: 'Monerium EUR emoney',
          symbol: 'EURe',
          address: '0x18ec0A6E18E5bc3784fDd3a3634b31245ab704F6',
          decimals: 18,
          image: 'https://bafybeicwcykiv52u6wf5nmn5zyydh4n66kyfqs7l3awuj4k7ji52ym6oyq.ipfs.w3s.link/eure.png',
          native: false,
          permit: false,
          currency: 'EUR'
        },
        {
          name: 'STASIS EURO',
          symbol: 'EURs',
          address: '0xe111178a87a3bff0c8d18decba5798827539ae99',
          decimals: 18,
          image: 'https://bafybeiai3bfegbupyi2fzjcq7yq3s4x3d3jcxnfqpr4epivq5vqurkt6h4.ipfs.w3s.link/eurs.png',
          native: false,
          permit: false,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Euro',
          symbol: 'jEUR',
          address: '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c',
          decimals: 18,
          image: 'https://bafybeiawrza7iznptwiu6tm2yjv63ch2zqkj4wddvkwqgjbpwjwypmfnia.ipfs.w3s.link/jEUR.webp',
          native: false,
          permit: true,
          currency: 'EUR'
        },
        {
          name: 'Jarvis Synthetic Swiss Franc',
          symbol: 'jCHF',
          address: '0xbd1463f02f61676d53fd183c2b19282bff93d099',
          decimals: 18,
          image: 'https://bafybeidqdluz7vh6pldk7ttoczoffuu3zzf72q22jzuepjkrqtuwskajma.ipfs.w3s.link/jCHF.webp',
          native: false,
          permit: true,
          currency: 'CHF'
        },
        {
          name: 'Jarvis Synthetic British Pound',
          symbol: 'jGBP',
          address: '0x767058f11800fba6a682e73a6e79ec5eb74fac8c',
          decimals: 18,
          image: 'https://bafybeihynjw5ab6o33vqlxqymqes4e35itc4zn6g22cls2vwcdhqjundlm.ipfs.w3s.link/jGBP.webp',
          native: false,
          permit: true,
          currency: 'GBP'
        },
        {
          name: 'Jarvis Synthetic Australian Dollar',
          symbol: 'jAUD',
          address: '0xcb7f1ef7246d1497b985f7fc45a1a31f04346133',
          decimals: 18,
          image: 'https://bafybeihxmc54pvqn3zdqc44puw22i32z3fmkz3qjd473jwcq6f6kkayfuy.ipfs.w3s.link/jAUD.png',
          native: false,
          permit: true,
          currency: 'AUD'
        },
        {
          name: 'Jarvis Synthetic Canadian Dollar',
          symbol: 'jCAD',
          address: '0x8ca194a3b22077359b5732de53373d4afc11dee3',
          decimals: 18,
          image: 'https://bafybeifczlcdorzw6ofvtuu577jjdz26jkzx46mhcsacl3eabckpbbgvyu.ipfs.w3s.link/jCAD.png',
          native: false,
          permit: true,
          currency: 'CAD'
        },
        {
          name: 'Jarvis Synthetic Japanese Yen',
          symbol: 'jJPY',
          address: '0x8343091f2499fd4b6174a46d067a920a3b851ff9',
          decimals: 18,
          image: 'https://bafybeiabil2uucnxyna47m4ihav7jvgi54ivpmzffuogkyu6gtqjg76khq.ipfs.w3s.link/jJPY.png',
          native: false,
          permit: true,
          currency: 'JPY'
        },
        {
          name: 'Jarvis Synthetic Swedish Krona',
          symbol: 'jSEK',
          address: '0x197e5d6ccff265ac3e303a34db360ee1429f5d1a',
          decimals: 18,
          image: 'https://bafybeidlpmo6wmust5rnt4je7has3qh47zywxup74yqdb4rdsoviybh3su.ipfs.w3s.link/jSEK.png',
          native: false,
          permit: true,
          currency: 'SEK'
        },
        {
          name: 'Jarvis Synthetic Singapore Dollar',
          symbol: 'jSGD',
          address: '0xa926db7a4cc0cb1736d5ac60495ca8eb7214b503',
          decimals: 18,
          image: 'https://bafybeiegkpv7fxijssd23jhv7xzngyl3wbb3oj5bujecdebmse7ac5awj4.ipfs.w3s.link/jSGD.png',
          native: false,
          permit: true,
          currency: 'SGD'
        }
      ]
    },
    mode: ['prod']
  }
]);

// Returns the specified network configuration
export const getNetworkInfo = (chainId: number): NetworkInfo => {
  const chain = allowedNetworks.find((n) => n.chainId === chainId);
  if (!chain) {
    throw new Error(`Unsupported chainId #${chainId}`);
  }
  return Object.freeze(chain);
};

// Returns 'requested' OR 'prod' networks of type
export const getNetworksByMode = (mode: NetworkMode): readonly NetworkInfo[] =>
  Object.freeze(allowedNetworks.filter((n) => n.mode.includes(mode) || n.mode.includes('prod')));