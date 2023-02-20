/**
 * This is a UwULang interpreter written in typescript
 */
class Block {
  val: number;
  constructor() {
    this.val = 0;
  }

  increment() {
    this.val = (this.val + 1) % 256;
  }

  decrement() {
    this.val = this.val > 0 ? this.val - 1 : 255;
  }
}

class Ptr {
  val: number;
  constructor() {
    this.val = 0;
  }

  moveRight() {
    this.val += 1;
  }

  moveLeft = () => {
    this.val = this.val > 0 ? this.val - 1 : 0;
  };
}

class Memory {
  blocks: Block[] = [new Block()];
  constructor() {
    this.blocks = [new Block()];
  }

  accessAt = (i: number) => {
    if (i < this.blocks.length) return this.blocks[i];
    const needed = i - this.blocks.length + 1;
    for (let j = 0; j < needed; j++) {
      this.blocks.push(new Block());
    }
    return this.blocks[i];
  };
}

function askQuestion(): number {
  const char = prompt("Enter a character: ");
  if (!char) return 0;
  return char?.charCodeAt(0) % 128;
}

export default function* run(instructions: string) {
  const memory = new Memory();

  const parsedInstructions: string[] = instructions
    .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
    .filter((i) => i !== "");

  const count = [0, 0];
  for (const uwu of instructions) {
    if (uwu === "😒") {
      count[0] += 1;
    } else if (uwu === "😡") {
      count[1] += 1;
    }
  }

  if (count[0] !== count[1]) throw new Error("Invalid syntax");

  // precompute matching brackets
  const matchingPos: Map<number, number> = new Map<number, number>();
  const stack: number[] = [];
  let i = 0;
  for (const uwu of instructions) {
    if (uwu === "😒") {
      stack.push(i);
    } else if (uwu === "😡") {
      const opening = stack.pop();
      if (opening === undefined) throw new Error("Invalid syntax");
      matchingPos.set(opening, i);
      matchingPos.set(i, opening);
    }
    i++;
  }

  stack.length = 0;

  const ptr = new Ptr();
  let instructionAt = 0;

  while (instructionAt < parsedInstructions.length) {
    const block = memory.accessAt(ptr.val);
    if (!block) throw new Error("Memory access error");
    const uwu = parsedInstructions[instructionAt]?.codePointAt(0);
    switch (uwu) {
      case "👆".codePointAt(0):
        block.increment();
        break;
      case "👇".codePointAt(0):
        block.decrement();
        break;
      case "👉".codePointAt(0):
        ptr.moveRight();
        break;
      case "👈".codePointAt(0):
        ptr.moveLeft();
        break;
      case "😳".codePointAt(0):
        // block.val = prompt()
        block.val = askQuestion();
        break;
      case "🥺".codePointAt(0):
        yield String.fromCharCode(block.val);
        break;
      case "😒".codePointAt(0):
        instructionAt =
          block.val === 0 ? matchingPos.get(instructionAt)! - 1 : instructionAt;
        break;
      case "😡".codePointAt(0):
        instructionAt =
          block.val !== 0 ? matchingPos.get(instructionAt)! - 1 : instructionAt;
        break;
    }
    instructionAt++;
  }
}
