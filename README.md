# feishu-action

<p align="center">
  <a href="https://github.com/0xlane/feishu-action"><img alt="feishu-action status" src="https://github.com/0xlane/feishu-action/workflows/build-test/badge.svg"></a>
</p>

> The code is adapted from [foxundermoon/feishu-action](https://github.com/foxundermoon/feishu-action), with added support for **card** message.

## ✨ Example Usage

- text

```yml
- name: text message
  uses: 0xlane/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: text
    content: |
      text: |
        hahahah
        from github action test
        repository: ${{ github.repository }}
        committer: ${{ github.actor }}
        compare: ${{ github.event.compare }}
        job status: ${{ job.status }}
```

- post

```yml
- name: post message
  uses: 0xlane/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: post
    content: |
      post:
        zh_cn:
          title: 我是一个标题
          content:
          - - tag: text
              un_escape: true
              text: '第一行&nbsp;:'
            - tag: a
              text: 超链接
              href: http://www.feishu.cn
            - tag: at
              user_id: ou_18eac85d35a26f989317ad4f02e8bbbb
          - - tag: text
              text: '第二行 :'
            - tag: text
              text: 文本测试
          - - tag: img
              image_key: d640eeea-4d2f-4cb3-88d8-c964fab53987
              width: 300
              height: 300
```

- share_chat

```yml
- name: share_chat message
  uses: 0xlane/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: share_chat
    content: |
      share_chat_id: oc_f5b1a7eb27ae2c7b6adc2a74faf339ff
```

- image

```yml
- name: image message
  uses: 0xlane/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: image
    content: |
      image_key: img_ecffc3b9-8f14-400f-a014-05eca1a4310g
```

- card

```yml
- name: card message
  uses: 0xlane/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: interactive
    card: |
      config:
        wide_screen_mode: true
      header:
        template: blue
        title:
          content: 🍎 HomeLab Release
          tag: plain_text
      elements:
        - tag: markdown
          content: ${{ github.event.head_commit.message }}

```

🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

Contexts and expression syntax for GitHub Actions, here: https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions#github-context

**Result**

## Options

| option   | type   | description                                                               |
| -------- | ------ | ------------------------------------------------------------------------- |
| url      | string | webhook url: https://open.feishu.cn/open-apis/bot/hook/7c5a4a4ba83bxxxxxx |
| msg_type | string | message type                                                              |
| content  | string | message content , yaml string                                             |

> [How do I use a robot in a group chat?](https://getfeishu.cn/hc/zh-cn/articles/360024984973-%E5%9C%A8%E7%BE%A4%E8%81%8A%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA)
