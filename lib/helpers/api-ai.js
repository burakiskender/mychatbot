'use strict'

const rp = require('minimal-request-promise')

module.exports = function apiAiQuery(text, sessionId, token) {
  return rp.post('https://api.api.ai/v1/query?v=20161120', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: text,
      lang: 'en',
      sessionId: sessionId
    })
  })
    .then(data => {
      let response = JSON.parse(data.body)

      console.log('API.ai response', response)

      //if (!response && typeof response.result !== 'object' || response.result.action === 'input.unknown')
        if (!response && typeof response.result !== 'object')
        { console.log('Invalid Response from Ai.Api :' + response) }

      return {
        action: response.result.action,
        params: response.result.parameters,
        reply: response.result.fulfillment,
        score: response.result.score,
        metadata: response.result.metadata
      }
    })
}
