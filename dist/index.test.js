const rewire = require("rewire")
const index = rewire("./index")
const _interopRequireDefault = index.__get__("_interopRequireDefault")
// @ponicode
describe("_interopRequireDefault", () => {
    test("0", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Jean-Philippe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _interopRequireDefault({ __esModule: "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _interopRequireDefault(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
