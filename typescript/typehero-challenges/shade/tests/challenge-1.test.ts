import { musicianInfo } from "../challenge-1";


describe("Testing challenge 1", () => {
  it("Should print musician info alive", () => {
    const info = musicianInfo({ artistName: "Mozart", age: 22, deceased: false })
    expect(info).toBe("Mozart, age 22")
  })

  it("Should print musician info (deceased)", () => {
    const info = musicianInfo({ artistName: "Mozart", age: 22, deceased: true })
    expect(info).toBe("Mozart, age 22 (deceased)")
  })
})