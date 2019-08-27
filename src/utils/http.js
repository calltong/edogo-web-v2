import request from 'request'

export class Http {
  constructor() {
    this.httpReq = request
  }

  process(options) {
    return new Promise(resolve => {
      request(options, async (error, response, body) => {
        if (error) {
          let res = {
            statusCode: 400,
            body: error,
          };
          resolve(res)
        } else {
          let data = { message: body }
          try {
            data = JSON.parse(body)
          } catch(e) {

          }
          let res = {
            statusCode: response.statusCode,
            body: data,
          };
          resolve(res)
        }
      })
    })
  }

  async setOption(setting, options = {}) {
    if (options.authorization) setting['authorization'] = options.authorization

    return setting
  }

  async get(url, options = {}) {
    let setting = {
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    setting = await this.setOption(setting, options)
    let resp = await this.process(setting)
    return resp
  }

  async post(url, options = {}) {
    let setting = {
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.json),
    }

    setting = await this.setOption(setting, options)
    let resp = await this.process(setting)
    return resp
  }
}

export const http = new Http()
export default http
