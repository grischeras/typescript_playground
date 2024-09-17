import { voyager1 } from "../challenge-2"

describe("Testing challenge 1", () => {
  it("Should voyager1 have entries", () => {
    const entries = Object.entries(voyager1)
    expect(entries.length).toBeGreaterThan(0)
  })

  it("Should voyager1 be operation", () => {
    const { isOperational } = voyager1
    expect(isOperational).toBeTruthy()
  })

  it("Should voyager1 have payload 'Golden Record'", () => {
    const { payload } = voyager1
    expect(payload[0].name).toBe("Golden Record")
  })

})