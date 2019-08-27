
export class Filer {
  toCSV({ list = [], key = [], header = [], subname }) {
    let rows = this.toRowCSV({ list, key, subname })
    let blob = this.toCSVByRow({ rows, header })
    return blob
  }

  toCSVByRow({ rows = [], header = [] }) {
    let result = rows.reduce((init, name) => init + '\n' + name.slice(0, -1), header)
    let blob = new Blob([result], { type: 'text/plain;charset=utf-8' })
    return blob
  }

  toRowCSV({ list = [], key = [], subname }) {
    let result = list.map((item) => {
      return key.reduce((init, name) => {
        let tmp = item[name]
        if (tmp === undefined && item[subname]) {
          tmp = item[subname][name]
        }
        let txt = tmp ? `${tmp}`.replace(/,/g, '') : ''
        return init + txt + ','
      }, '')
    })

    return result
  }
}

export const file = new Filer()
export default file
