export class MemoryStore {

  private memories: string[] = [];

  save(memory: string) {
    this.memories.push(memory);
  }

  getAll() {
    return this.memories;
  }

}
