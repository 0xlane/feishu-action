import * as core from '@actions/core'
import got from 'got'
import yaml from 'js-yaml'

interface Message {
  msg_type: string
  content: any
}

interface CardMessage {
  msg_type: string
  card: any
}

async function postMessage(): Promise<string> {
  const msg_type: string = core.getInput('msg_type')
  const content: string = core.getInput('content')
  const card: string = core.getInput('card')
  if (!content) {
    return await postCard({
      msg_type,
      card: yaml.load(card)
    })
  }
  return await post({
    msg_type,
    content: yaml.load(content)
  })
}

async function postCard(body: CardMessage): Promise<string> {
  const url: string = core.getInput('url')
  core.debug(body)
  const rsp = await got.post(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  core.debug(rsp.body)
  return rsp.body
}

async function post(body: Message): Promise<string> {
  const url: string = core.getInput('url')
  core.debug(body)
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
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
