require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember unit inflict person flip senior'; 
let testAccounts = [
"0xb05450a8a91fe5dcec8e9923b7ae511653f8be0335b006119ac5e0ddc8c027e5",
"0x509860b6a6162126ca54f80103e4eb6143b41818ab32a0eac76e1f8171e34d07",
"0xcc0f1b83dcef0798c624d673fb4da207cf62eb0bff89033e4742e76c06eefee6",
"0x88cea366d13e139f7be3c24a407c5ed97a7adb042ca1a0e7d390e7655840f0c5",
"0xccb712880745de41e5dfb348d9f6eb6f1d73be1c0880c21f8401635b8894e486",
"0xb7ce2dbb1fdfa53fcfd3b41bda6f0fc399c3a5f27c4b1dc430c470f7a06a2b11",
"0x979dc910fd9f0a2b696b123885975e6f72f29261ff1320a2d103d1721dcf92a3",
"0xa23fc7fd1274495e60107648a86a927a8af5d3d512ed823025d1d978343444a2",
"0x02857f0dc328f00b11814a55e2143316aefe7e3c092a04aa0da6a2f09e3dc1f5",
"0x13a5f4cbb27917b6d7c44c9a6e46ef57ce1f7afa44aa88d8c491517a1afa892f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

