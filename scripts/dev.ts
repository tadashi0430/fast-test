const { copyFile } = require('fs/promises')
const esbuild = require('esbuild')
const browserSync = require('browser-sync')

const moveHtml = async () => {
    await copyFile('public/index.html', 'dist/index.html')
}

const rebuildJs = async () => {
    return await esbuild.context({
        entryPoints: ['src/index.ts'],
        bundle: true,
        outdir: 'dist',
    })
}

const init = async () => {
    await moveHtml()
    const ctx = await rebuildJs()
    await ctx.rebuild()

    const bs = browserSync.create()

    bs.watch('public/*.html', async () => {
        await moveHtml()
        bs.reload()
    })
    bs.watch('src/*', async () => {
        await ctx.rebuild()
        bs.reload()
    })
    bs.init({
        server: 'dist',
    })
}

init()
