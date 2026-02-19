# Fix Microphone on codecraft.life (Iframe Embed)

If codecraft.life embeds this app in an iframe, the **parent page** must allow microphone access.

## Add `allow="microphone"` to the iframe

Change your iframe from:
```html
<iframe src="https://melodious-phoenix-1af0bc.netlify.app/"></iframe>
```

To:
```html
<iframe src="https://melodious-phoenix-1af0bc.netlify.app/" allow="microphone"></iframe>
```

Or if using codecraft.life:
```html
<iframe src="https://codecraft.life/" allow="microphone"></iframe>
```

## Where to add this

- **Netlify**: Edit the HTML file that contains the iframe.
- **WordPress**: Edit the page in Custom HTML block or theme file.
- **Other**: Find the file that embeds the app and add `allow="microphone"` to the iframe tag.

## Workaround (already in app)

When embedded, the app now shows: **"Open in new tab"** — clicking it opens the app where voice works.
