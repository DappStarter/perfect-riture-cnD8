require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth situate company install nasty equal gentle'; 
let testAccounts = [
"0x5df08d5a51d7f0cbcf4580ccaed4cb0f2371e80ee9bd6421bb6f442e03784e04",
"0x72b2285cf91fa882b935479b7ead7032fa7121cdd072f5aba6fbfa2f2481df3b",
"0x70e94fcc736d4ebc772efab5b2c6feb98d7cb222fda9d356e15eeed3d948c10d",
"0x402fc6f7cfd14b20c8dd56844ba004c1649312a1144dd1808b0eaee34936a80b",
"0x514bc2949073c99faeaf4ad90be83d3f8722885e6046787bbedbe19bcf93800a",
"0x89f44d6ae46bb41d8b5ab481bfe0fbdbfb6216fd14fd54b2efa3a93d191d0816",
"0xf19a15b64ad80df61b9b7230b834522a4ba44fc58be674984e6f5b4b5692c06b",
"0x49fc030b447a06ea0b29de2c9fa3b55e75476e6d532021a98a515142c487df9b",
"0xd4432eca44a5c9e4191ce49b9007f7839a1f720276ceb48d8b2f2730658c6440",
"0x154f8ffb806228df2b2e692d2d863120f2121831187860005ccb0d7030d55f07"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


