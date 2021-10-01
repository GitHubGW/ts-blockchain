import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateHash = (index: number, previousHash: string, data: string, timestamp: number): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data);

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const firstBlock: Block = new Block(0, "1fs2eacasd", "", "hello", 123456);

let blockchain: Block[] = [firstBlock];
console.log("blockchain", blockchain);

const getBlockchain = (): Block[] => blockchain;

const getLastBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(Date.now() / 1000);

export {};
