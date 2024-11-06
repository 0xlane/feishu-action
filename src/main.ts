import * as core from '@actions/core'
import got from 'got'
import yaml from 'js-yaml'

interface Message {
  msg_type: string
  content: any
  card: any
}

async function postMessage(): Promise<string> {
  const msg_type: string = core.getInput('msg_type')
  const content: string = core.getInput('content')
  const card: string = core.getInput('card')
  return await post({
    msg_type,
    content: yaml.load(content),
    card: yaml.load(card)
  })
}

async function post(body: Message): Promise<string> {
  const url: string = core.getInput('url')
  const rsp = await got.post(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  core.debug(rsp.body)
  return rsp.body
}

async function run(): Promise<void> {
  try {
    await postMessage()
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
