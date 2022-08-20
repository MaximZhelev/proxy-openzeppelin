# Proxy example

## Setup

```sh
$ npm install
```

Create a `.env` following the `.env.example`:

```
INFURA_API_KEY=zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
MNEMONIC=here is where your twelve words mnemonic should be put my friend
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ npm run compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ npm run typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ npm run lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ npm run lint:ts
```

### Format files

```sh
$ npm run prettier
```

### Test

Run unit tests:

```sh
$ npm run test
```

Run a single test:

```sh
$ npm run test test/MyContract.test.ts
```

### Coverage

Generate a test coverage report:

```sh
$ npm run coverage
```

### Deploy

Deploy to Ropsten network:

```sh
$ npm run deploy:ropsten
```

Deploy to development network:

```sh
$ npx hardhat node
```

```sh
$ npm run deploy:localhost
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ npm run clean
```
