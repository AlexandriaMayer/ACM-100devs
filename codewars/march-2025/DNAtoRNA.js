function DNAtoRNA(dna) {
  // T replaced by U
  // no numbers or lowercase? no empty strings?
  return dna.replaceAll("T", "U")
}
