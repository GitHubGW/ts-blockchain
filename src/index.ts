import * as CryptoJS from "crypto-js";

// Block 클래스 생성
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // Hash 계산
  static calculateHash = (index: number, previousHash: string, data: string, timestamp: number): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  // Block 구조 확인
  static validateStructure = (block: Block): boolean => {
    const checkBlockStructure =
      typeof block.index === "number" &&
      typeof block.hash === "string" &&
      typeof block.previousHash === "string" &&
      typeof block.data === "string" &&
      typeof block.timestamp === "number";

    return checkBlockStructure;
  };

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const firstBlock: Block = new Block(0, "1fs2eacasd", "", "block1", 123456);
let blockchain: Block[] = [firstBlock];
const getPreviousBlock = (): Block => blockchain[blockchain.length - 1];
const getTimestamp = (): number => Math.round(Date.now() / 1000);

// 새로운 Block 생성
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getPreviousBlock();
  const newIndex: number = previousBlock.index + 1;
  const previousHash = previousBlock.hash;
  const newTimestamp: number = getTimestamp();
  const newHash: string = Block.calculateHash(newIndex, previousHash, data, newTimestamp);

  const newBlock: Block = new Block(newIndex, newHash, previousHash, data, newTimestamp);
  addBlock(newBlock);
  console.log("blockchain", blockchain);
  return newBlock;
};

// Block 유효성 검사
const isBlockValid = (newBlock: Block, previousBlock: Block): boolean => {
  const checkNewBlock = Block.validateStructure(newBlock);
  const checkPreviousBlock = Block.validateStructure(previousBlock);
  const getNewBlockHash = Block.calculateHash(newBlock.index, newBlock.previousHash, newBlock.data, newBlock.timestamp);

  if (checkNewBlock === false || checkPreviousBlock === false) {
    return false;
  } else if (newBlock.previousHash !== previousBlock.hash) {
    return false;
  } else if (newBlock.hash !== getNewBlockHash) {
    return false;
  } else {
    return true;
  }
};

// Block 추가
const addBlock = (newBlock: Block): void => {
  const checkBlockValid = isBlockValid(newBlock, getPreviousBlock());

  if (checkBlockValid) {
    blockchain.push(newBlock);
  }
};

export {};
