const OSS = require('ali-oss');

const client = new OSS({
    region: 'oss-cn-shenzhen',
    bucket: 'yuan-test-1',
    accessKeyId: 'LTAI5tPygFEWaZrkzMMAEuPE',
});

async function put () {
  try {
    const result = await client.put('cat1.jpg', './mao.jpg');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
put();