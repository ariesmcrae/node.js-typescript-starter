const main = async (): Promise<void> => {
  console.debug('Hello, world!')
}

void (async () => {
  await main()
})()
